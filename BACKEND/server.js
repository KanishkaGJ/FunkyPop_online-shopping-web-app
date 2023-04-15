const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//admin route
const admin_router = require("./Routes/admin-route");
app.use("/admin", admin_router);

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
  useCreateIndex: true;
  useNewUrlParser: true;
  useUnifiedTopology: true;
  useFindAndModify: true;
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection establishment is successful!!!");
});

//order route
const order_router = require("./Routes/order-route");
app.use("/order", order_router);

//seller rate route
const sellerRate_router = require("./Routes/sellerRate-route");
app.use("/sellerRate", sellerRate_router);

//product rate route
const productRate_router = require("./Routes/productRate-route");
app.use("/productRate", productRate_router);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});