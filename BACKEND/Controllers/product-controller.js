let product = require("../Models/product");
//const ProductRate = require("../Models/ProductRate");
const { route } = require("./Routes/product-route");

//add products
exports.addProduct = (req, res) => {

    const { productID, productName, quantity, type, color, size, productDescription, overallRating } = req.body;
    const newProduct = new product({ productID, productName, quantity, type, color, size, productDescription, overallRating });

    newProduct
        .save()
        .then(() => {
            res.json("Product Added");
        })
        .catch((err) => {
            console.log(err);
        });
};


//all orders
exports.getAllProducts = (req, res) => {

    product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            console.log(err);
        });
};


//get order by id
exports.getProductById = async (req, res) => {

    let productId = req.params.id;

    const product = await product.findById(productId).then((product)=>{ // check product ID's relation
        res.status(200).send({status:"Product fetched", product})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get product", error:err.message})
    })

};


//update order
exports.updateOrder = async (req, res) => {

    let productId = req.params.id;

    const {productID, productName, quantity, type, color, size, productDescription, overallRating} = req.body;

    const updateProduct = {
        productID, 
        productName, 
        quantity, 
        type, 
        color, 
        size, 
        productDescription, 
        overallRating
    };

    const update = await product.findByIdAndUpdate(productId, updateProduct).then(() => {
        res.status(200).send({status: "Product Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating product data", error: err.message});
    });
};


//delete order
exports.deleteProduct = async (req, res) => {

    let productId = req.params.id;

    const productDel = await Product.findByIdAndDelete(productId).then(() => {
        res.status(200).send({status: "Product Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting product", error: err.message});
    });
};