const router = require("express").Router();
const orderController = require("../Controllers/order-controller");

router.post("/addOrder", orderController.addOrder);

router.get("/orders", orderController.getAllOrders);

router.get("/getOrder/:id", orderController.getOrderById);

router.put("/update/:id", orderController.updateOrder);

router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;
