const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    CustomerName: {
        type: String,
        required: true
    },

    ProductName: {
        type: String,
        required: true,
        unique: true,
    },
    
    quantity: {
        type: Number,
        required: true,
    },

    orderDate: {
        type: Date,
        required: true,
    },

    status:{
        type: String,
        required: true, 
    }

});

module.exports = Order = mongoose.model("order", OrderSchema);