const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  stock: Number,
}, {
  timestamps: true,
});

module.exports = mongoose.model("Food", foodSchema);