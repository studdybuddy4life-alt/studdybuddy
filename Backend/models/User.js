const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  referralCode: String,
  hoursPurchased: { type: Number, default: 0 },
  remainingMinutes: { type: Number, default: 0 },
  subscription: {
    plan: String,
    active: Boolean,
    startDate: Date
  }
},{ timestamps: true });
module.exports.User = mongoose.model('User', userSchema);
