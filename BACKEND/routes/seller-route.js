const express = require('express');
const { slrsignup, verifyToken, getSeller } = require('../Controllers/seller-auth-controller');
const {slrlogin} = require('../Controllers/seller-auth-controller');

const sellerRouter = express.Router();

sellerRouter.post('/signup', slrsignup);
sellerRouter.post('/login', slrlogin);
sellerRouter.get('/sel', verifyToken, getSeller);


module.exports = sellerRouter;