const router = require("express").Router();
const productController = require("../Controllers/product-controller");
const multer = require("multer");
const path = require("path");
const {v4: uuidv4} = require("uuid");




// router.post("/addProduct", productController.addProduct);
router.get("/products", productController.getAllProducts);
router.get("/getProduct/:id", productController.getProductById);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../client/public/Images");
    },
    filename: (req, file, cb) => {
      cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
    },
  });

const upload = multer({ storage });



router.post("/addProduct", upload.single("image"), async (req, res) => {

      const { productID, productName, quantity, type, color, size, productDescription} = req.body;
      const { filename: imageName } = req.file;
      console.log(req.file);
  
      const imagePath = `/public/Images/${imageName}`;
  
      // Save file path to MongoDB
      const newProduct = new product({ productID, productName, quantity, type, color, size, productDescription, image: imagePath });
  
      await newProduct
        .save()
        .then(() => {
            res.json("Product Added");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;


