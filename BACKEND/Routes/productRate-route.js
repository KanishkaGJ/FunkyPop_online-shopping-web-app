const router = require("express").Router();
const productRateController = require("../Controllers/productRate-controller");

router.post("/addProductRate", productRateController.addProductRate);

router.get("/productRates", productRateController.getProductRate);

router.get("/getProductRate/:id", productRateController.getProductRateById);

router.put("/update/:id", productRateController.updateProductRate);

router.delete("/delete/:id", productRateController.deleteProductRate);

module.exports = router;

