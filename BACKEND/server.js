const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cookieParser());

app.use(cors({credentials: true, origin:"http://localhost:3001"}));
app.use(bodyParser.json());


//admin route
const admin_router = require("./Routes/admin-route");
app.use("/admin", admin_router);

const PORT = process.env.PORT || 8080;

app.use(cors({credentials: true, origin:"http://localhost:3001"}));
app.use(bodyParser.json());

// const URL = process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URL, () => {
  useCreateIndex: true;
  useNewUrlParser: true;
  useUnifiedTopology: true;
  useFindAndModify: true;
});

// const connection = mongoose.connection;

mongoose.connection.once("open", () => {
    console.log("MongoDB connection establishment is successful!!!");
});



//order route
const order_router = require("./Routes/order-route");
app.use("/order", order_router);

//product rate route
const productRate_router = require("./Routes/productRate-route");
app.use("/productRate", productRate_router);

//seller rate route
const sellerRate_router = require("./Routes/sellerRate-route");
app.use("/sellerRate", sellerRate_router);
//import the backend routes
// const customerRouter = require('./Routes/customer-route');
// app.use("/customer", customerRouter);

const sellerRouter = require('./Routes/seller-route');
app.use("/seller", sellerRouter);

const productRouter = require('./Routes/product-route');
app.use("/product", productRouter);


app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});


// testing out image handling server.js codes

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const uploadRoute = require("./Routes/upload-route");
app.use(uploadRoute);