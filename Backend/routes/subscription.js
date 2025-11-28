const express = require('express');
const subRouter = express.Router();
const { Subscription } = require('../models/Subscription');
const { User } = require('../models/User');

subRouter.post('/create', async (req,res)=>{
  try{
    const { userId, priceUSD, providerSubscriptionId } = req.body;
    const start = new Date(); const next = new Date(start); next.setMonth(next.getMonth()+1);
    const sub = new Subscription({ userId, planName:'Monthly Unlimited', priceUSD, minutesUnlimited:true, maxMinutesPerDay:90, maxSessionsPerDay:2, startDate:start, nextBillingDate:next, paymentProvider:'paypal', providerSubscriptionId, active:true });
    await sub.save();
    const user = await User.findById(userId);
    if(user){ user.subscription = { plan:'monthly_unlimited', active:true, startDate:start }; await user.save(); }
    res.send({ success:true, subscription: sub });
  }catch(e){ console.error(e); res.status(500).send({ message:'Error' }); }
});

module.exports = subRouter;
