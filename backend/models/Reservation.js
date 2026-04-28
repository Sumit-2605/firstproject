const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: String,
  time: String,
  guests: Number,
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);