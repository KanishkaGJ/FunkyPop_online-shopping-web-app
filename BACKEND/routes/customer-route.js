const express = require('express');
const { cstsignup, verifyToken, getCustomer, refreshToken } = require('../controllers/customer-auth-controller');
const {cstlogin} = require('../controllers/customer-auth-controller');
const { updateCustomer, deleteCustomer } = require('../controllers/customer-controller');

const customerRouter = express.Router();

customerRouter.post('/signup', cstsignup);
customerRouter.post('/login', cstlogin);
customerRouter.get('/cus', verifyToken, getCustomer);
customerRouter.get('/refresh', refreshToken, verifyToken,getCustomer)
customerRouter.put('/update/:id', updateCustomer)
customerRouter.delete('/delete/:id', deleteCustomer)
//verify token



module.exports = customerRouter;