const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({

    productID: {
        type: String,
        required: true
    },

    productName: {
        type: String,
        required: true
    },

    quantity:{
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    }
});