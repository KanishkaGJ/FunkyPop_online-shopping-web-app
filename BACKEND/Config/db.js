require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connection establishment is successful!!!");

    }catch(error){
        console.error("MongoDB connection establishment is failed!!!");
        process.exit(1);
    }
}

module.exports = connectDB;