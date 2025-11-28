const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slot: Date,
  status: { type: String, default: 'booked' },
  googleMeetLink: String,
  deductedMinutes: { type: Number, default: 0 },
  createdAt: Date
});
module.exports.Booking = mongoose.model('Booking', bookingSchema);
