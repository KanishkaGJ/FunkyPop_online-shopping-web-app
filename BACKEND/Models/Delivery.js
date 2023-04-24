const mongoose = require("mongoose");
const deliverySchema = new mongoose.Schema({
  deliveryAddress: {
    type: String,
    required: true,
  },
  tot: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
});
const Delivery = mongoose.model("Delivery", deliverySchema);
module.exports = Delivery;
