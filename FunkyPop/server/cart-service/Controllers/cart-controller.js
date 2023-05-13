let Cart = require("../Models/Cart");
const { route } = require("../Routes/cart-route");

// GET /allCarts - Get all carts.
exports.getCart = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

// GET /cart/:id - Get a cart by ID
exports.getCartById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findById(id);
    if (!cart) {
      res.status(404).send("Cart not found");
      return;
    }
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

// POST /createCart - Create a new Cart
exports.createCart = async (req, res, next) => {
  const { cartID, pName, pQuantity } = req.body;
    const newCart = new Cart({ cartID, pName, pQuantity});

    newCart.save().then(() => {
      res.json("Cart added");
    })
    .catch((error) => {
      console.log(error)
    });
};

// PUT /updateCart/:id - Update a cart by ID
exports.updateCart = async (req, res, next) => {
  const { id } = req.params;
  const { cartID, pName, pQuantity } = req.body;
  try {
    const cart = await Cart.findByIdAndUpdate(
      id,
      { cartID, pName, pQuantity},
      { new: true }
    );
    if (!cart) {
      res.status(404).send("Cart not found");
      return;
    }
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

// DELETE /deleteCart/:id - Delete a cart by ID
exports.deleteCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndDelete(id);
    if (!cart) {
      res.status(404).send("Cart not found");
      return;
    }
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};
