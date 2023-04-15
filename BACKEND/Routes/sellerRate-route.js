const router = require("express").Router();
const sellerRateController = require("../Controllers/sellerRate-controller");

router.post("/addSellerRate", sellerRateController.addSellerRate);

router.get("/sellerRates", sellerRateController.getSellerRate);

router.get("/getSellerRate/:id", sellerRateController.getSellerRateById);

router.put("/update/:id", sellerRateController.updateSellerRate);

router.delete("/delete/:id", sellerRateController.deleteSellerRate);

module.exports = router;