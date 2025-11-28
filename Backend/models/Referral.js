const mongoose = require('mongoose');
const refSchema = new mongoose.Schema({
  referrerUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  refereeEmail: String,
  code: String,
  status: { type: String, default: 'pending' },
  bonusMinutes: { type: Number, default: 0 },
  createdAt: Date
});
module.exports.Referral = mongoose.model('Referral', refSchema);
