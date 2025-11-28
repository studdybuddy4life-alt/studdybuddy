const express = require('express');
const router = express.Router();
const ReferralModel = require('../models/Referral');
const { User } = require('../models/User');

// create referral
router.post('/create', async (req,res)=>{
  try{
    const { referralCode, refereeEmail } = req.body;
    const referrer = await User.findOne({ referralCode });
    if(!referrer) return res.status(404).send({ message: 'Invalid referral code' });
    const newRef = new ReferralModel({ referrerUserId: referrer._id, refereeEmail, code: referralCode, status:'pending', createdAt: new Date() });
    await newRef.save();
    res.send({ success:true, referral: newRef });
  }catch(e){console.error(e); res.status(500).send({ message:'Error' });}
});

// confirm referral
router.post('/confirm', async (req,res)=>{
  try{
    const { referralId } = req.body;
    const ref = await ReferralModel.findById(referralId);
    if(!ref) return res.status(404).send({ message:'Referral not found' });
    if(ref.status === 'confirmed') return res.send({ success:true, message:'Already confirmed' });
    ref.status = 'confirmed'; await ref.save();
    const referrer = await User.findById(ref.referrerUserId);
    if(!referrer) return res.status(404).send({ message:'Referrer not found' });
    const confirmedCount = await ReferralModel.countDocuments({ referrerUserId: ref.referrerUserId, status:'confirmed' }) - 1;
    let bonus = confirmedCount <= 0 ? 30 : 45;
    if((referrer.hoursPurchased && referrer.hoursPurchased>0) || (referrer.remainingMinutes && referrer.remainingMinutes>0)){
      referrer.remainingMinutes = (referrer.remainingMinutes||0) + bonus;
      await referrer.save();
      ref.bonusMinutes = bonus; await ref.save();
      return res.send({ success:true, applied:true, bonus });
    } else {
      ref.bonusMinutes = bonus; await ref.save();
      return res.send({ success:true, applied:false, message:'Referrer has not purchased plan. Bonus stored.' });
    }
  }catch(e){console.error(e); res.status(500).send({ message:'Error' });}
});

// apply pending bonuses
router.post('/apply-pending-bonuses', async (req,res)=>{
  try{
    const { userId } = req.body;
    const pending = await ReferralModel.find({ referrerUserId: userId, status:'confirmed', bonusMinutes: { $gt: 0 } });
    if(!pending || pending.length===0) return res.send({ success:true, applied:0 });
    const referrer = await User.findById(userId);
    if(!referrer) return res.status(404).send({ message:'Referrer not found' });
    let totalBonus=0;
    for(const p of pending){ totalBonus += p.bonusMinutes||0; p.bonusMinutes=0; await p.save(); }
    referrer.remainingMinutes = (referrer.remainingMinutes||0) + totalBonus;
    await referrer.save();
    res.send({ success:true, applied: totalBonus });
  }catch(e){console.error(e); res.status(500).send({ message:'Error' });}
});

router.get('/my/:userId', async (req,res)=>{
  try{ const refs = await ReferralModel.find({ referrerUserId: req.params.userId }).sort({ createdAt:-1 }); res.send(refs); }
  catch(e){console.error(e); res.status(500).send({ message:'Error' });}
});

module.exports = router;
