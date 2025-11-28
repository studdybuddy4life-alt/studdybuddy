const express = require('express');
const router = express.Router();
const { Booking } = require('../models/Booking');
const { User } = require('../models/User');

// Simple booking stub demonstrating subscription checks
router.post('/book', async (req,res)=>{
  try {
    const { userId, slot, tutorId } = req.body;
    const user = await User.findById(userId);
    if (user.subscription && user.subscription.active && user.subscription.plan === 'monthly_unlimited') {
      const startOfDay = new Date(slot); startOfDay.setHours(0,0,0,0);
      const endOfDay = new Date(slot); endOfDay.setHours(23,59,59,999);
      const sessionsToday = await Booking.countDocuments({ studentId: userId, slot: { $gte: startOfDay, $lte: endOfDay }});
      if (sessionsToday >= 2) return res.status(400).send({ message: 'Subscription limit: max 2 sessions per day reached' });
      const bookings = await Booking.find({ studentId: userId, slot: { $gte: startOfDay, $lte: endOfDay }, status: 'completed' });
      let minutesUsed=0; for(const b of bookings) minutesUsed += b.deductedMinutes || 0;
      const dailyLimit = user.subscription.maxMinutesPerDay || 90;
      if (minutesUsed >= dailyLimit) return res.status(400).send({ message: 'Subscription limit: max 90 minutes per day reached' });
      // warn flag
      const warningThreshold = Math.floor(0.8*dailyLimit);
      const warn = minutesUsed >= warningThreshold && minutesUsed < dailyLimit;
      const booking = new Booking({ studentId: userId, tutorId, slot, status:'booked', createdAt: new Date() });
      await booking.save();
      return res.send({ success:true, booking, warn, minutesUsed, minutesRemaining: dailyLimit - minutesUsed });
    } else {
      // Prepaid flow (deduct hoursPurchased or remainingMinutes)
      const booking = new Booking({ studentId: userId, tutorId, slot, status:'booked', createdAt: new Date() });
      await booking.save();
      res.send({ success:true, booking });
    }
  } catch(e){ console.error(e); res.status(500).send({ message:'Error' }); }
});

module.exports = router;
