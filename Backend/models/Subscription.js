const mongoose = require('mongoose');
const subscriptionSchema = new mongoose.Schema({
  userId: String,
  planName: String,
  priceUSD: Number,
  minutesUnlimited: { type: Boolean, default: false },
  maxMinutesPerDay: Number,
  maxSessionsPerDay: Number,
  startDate: Date,
  nextBillingDate: Date,
  active: { type: Boolean, default: true },
  paymentProvider: String,
  providerSubscriptionId: String
});
module.exports.Subscription = mongoose.model('Subscription', subscriptionSchema);
