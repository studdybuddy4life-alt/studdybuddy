const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
// Simple signup/login stubs (expand with password hashing/JWT)
router.post('/signup', async (req,res)=>{
  try {
    const { name, email } = req.body;
    const u = new User({ name, email });
    await u.save();
    res.send({ success:true, userId: u._id });
  } catch(e){ console.error(e); res.status(500).send({ message:'Error' }); }
});
router.get('/health', (req,res)=> res.send({ ok:true }));
module.exports = router;
