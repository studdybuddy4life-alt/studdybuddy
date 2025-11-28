const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');
const axios = require('axios');
const { Referral } = require('../models/Referral');
const { User } = require('../models/User');

paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox',
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});

// simplified checkout placeholder
router.post('/checkout', async (req,res)=>{
  const { userId, packageHours, amount, package } = req.body;
  // In production use Orders V2 SDK to create order; include custom_id mapping
  res.send({ approvalUrl: 'https://www.sandbox.paypal.com/checkoutnow?token=MOCK' });
});

// success endpoint for frontend redirect after payment capture
router.post('/success', async (req,res)=>{
  try{
    const { userId, packageHours } = req.body;
    const user = await User.findById(userId);
    if(!user) return res.status(404).send({ message:'User not found' });
    user.hoursPurchased = (user.hoursPurchased||0) + (packageHours||0);
    await user.save();
    try{ await axios.post(`${process.env.BACKEND_URL}/referral/apply-pending-bonuses`, { userId: user._id }); }catch(e){console.error(e);}
    res.send({ success:true });
  }catch(e){console.error(e); res.status(500).send({ message:'Error' });}
});

// webhook handler with verification
router.post('/webhook', express.json({ type: '*/*' }), async (req,res)=>{
  try{
    const transmissionId = req.headers['paypal-transmission-id'] || req.headers['paypal_transmission_id'];
    const transmissionTime = req.headers['paypal-transmission-time'] || req.headers['paypal_transmission_time'];
    const certUrl = req.headers['paypal-cert-url'] || req.headers['paypal_cert_url'];
    const authAlgo = req.headers['paypal-auth-algo'] || req.headers['paypal_auth_algo'];
    const transmissionSig = req.headers['paypal-transmission-sig'] || req.headers['paypal_transmission_sig'];
    const webhookId = process.env.PAYPAL_WEBHOOK_ID;
    if(!webhookId){ console.error('PAYPAL_WEBHOOK_ID not configured'); return res.status(500).send('Webhook not configured'); }
    const verifyReq = {
      auth_algo: authAlgo, cert_url: certUrl,
      transmission_id: transmissionId, transmission_sig: transmissionSig,
      transmission_time: transmissionTime, webhook_id: webhookId,
      webhook_event: req.body
    };
    paypal.notification.webhookEvent.verify(verifyReq, async function(error, response){
      if(error){ console.error('PayPal webhook verify error', error); return res.status(400).send('Invalid webhook signature'); }
      if(response.verification_status !== 'SUCCESS'){ console.error('Invalid PayPal webhook verification status:', response); return res.status(400).send('Invalid webhook signature'); }
      const webhookEvent = req.body;
      const eventType = webhookEvent.event_type;
      if(['CHECKOUT.ORDER.APPROVED','PAYMENT.CAPTURE.COMPLETED','PAYMENT.SALE.COMPLETED'].includes(eventType)){
        const payerEmail = webhookEvent.resource?.payer?.email_address || webhookEvent.resource?.payer?.payer_info?.email || webhookEvent.resource?.payer_email;
        // try to read custom_id mapping
        let mapping = null;
        try{
          const pu = webhookEvent.resource?.purchase_units || [];
          if(Array.isArray(pu) && pu.length>0){ const customIdStr = pu[0].custom_id || pu[0].reference_id || null; if(customIdStr) mapping = JSON.parse(customIdStr); }
        }catch(e){ mapping = null; }
        if(mapping && mapping.userId && mapping.packageHours){
          try{
            const user = await User.findById(mapping.userId);
            if(user){ user.hoursPurchased = (user.hoursPurchased||0) + Number(mapping.packageHours); await user.save();
              try{ await axios.post(`${process.env.BACKEND_URL}/referral/apply-pending-bonuses`, { userId: user._id }); }catch(e){ console.error('apply pending bonuses error', e); }
            }
          }catch(e){ console.error('Error updating user hours from webhook mapping', e); }
        }
        if(payerEmail){
          const pending = await Referral.findOne({ refereeEmail: payerEmail, status: 'pending' });
          if(pending){
            try{ await axios.post(`${process.env.BACKEND_URL}/referral/confirm`, { referralId: pending._id }); }catch(err){ console.error('Error calling referral confirm:', err); }
          }
        }
      }
      return res.status(200).send('OK');
    });
  }catch(e){ console.error(e); return res.status(500).send('ERR'); }
});

module.exports = router;
