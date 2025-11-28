const express = require('express');
const usageRouter = express.Router();
const { User } = require('../models/User');
const Booking = require('../models/Booking');

usageRouter.get('/today/:userId', async (req,res)=>{
  try{
    const { userId } = req.params;
    const user = await User.findById(userId);
    if(!user) return res.status(404).send({ message:'User not found' });
    if(!user.subscription || !user.subscription.active || user.subscription.plan !== 'monthly_unlimited') {
      return res.send({ isSubscriber:false, minutesUsed:0, minutesRemaining:0, sessionsToday:0 });
    }
    const startOfDay = new Date(); startOfDay.setHours(0,0,0,0);
    const endOfDay = new Date(); endOfDay.setHours(23,59,59,999);
    const bookings = await Booking.find({ studentId: userId, slot: { $gte: startOfDay, $lte: endOfDay }, status: { $in:['completed','finished','closed'] }});
    let minutesUsed=0; let sessionsCount=0;
    for(const b of bookings){ minutesUsed += b.deductedMinutes || 0; sessionsCount += 1; }
    const dailyLimit = (user.subscription && user.subscription.maxMinutesPerDay) || 90;
    const minutesRemaining = Math.max(0, dailyLimit - minutesUsed);
    res.send({ isSubscriber:true, minutesUsed, minutesRemaining, sessionsToday: sessionsCount, dailyLimit });
  }catch(e){ console.error(e); res.status(500).send({ message:'Error' }); }
});

module.exports = usageRouter;
