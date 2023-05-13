const express = require("express");
const router = express.Router();
const cartController = require("../Controllers/cart-controller");

// Define routes
router.get("/allCarts", cartController.getCart);
router.get("/cart/:id", cartController.getCartById);
router.post("/createCart", cartController.createCart);
router.put("/updateCart/:id", cartController.updateCart);
router.delete("/deleteCart/:id", cartController.deleteCart);

module.exports = router;
