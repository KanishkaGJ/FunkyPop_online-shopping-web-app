const express = require('express');
const { slrsignup, verifyToken, getSeller } = require('../controllers/seller-controller');
const {slrlogin} = require('../controllers/seller-controller');

const sellerRouter = express.Router();

sellerRouter.post('/signup', slrsignup);
sellerRouter.post('/login', slrlogin);
sellerRouter.get('/sel', verifyToken, getSeller);


module.exports = sellerRouter;