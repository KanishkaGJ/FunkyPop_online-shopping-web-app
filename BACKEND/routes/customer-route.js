const express = require('express');
const { cstsignup, verifyToken, getCustomer, refreshToken } = require('../controllers/customer-controller');
const {cstlogin} = require('../controllers/customer-controller');

const customerRouter = express.Router();

customerRouter.post('/signup', cstsignup);
customerRouter.post('/login', cstlogin);
customerRouter.get('/cus', verifyToken, getCustomer);
customerRouter.get('/refresh', refreshToken, verifyToken,getCustomer)
//verify token


module.exports = customerRouter;