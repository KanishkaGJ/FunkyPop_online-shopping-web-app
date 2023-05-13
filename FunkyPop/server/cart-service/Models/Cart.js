const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  
  cartID: {
    type: String,
    required: true,
  },
  pName: {
    type: String,
    required: true,
  },
  pQuantity: {
    type: String,
    required: true,
  }
  // pPrice: {
  //   type: String,
  //   required: true,
  // },
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
