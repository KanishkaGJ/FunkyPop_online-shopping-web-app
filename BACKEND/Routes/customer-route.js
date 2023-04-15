const express = require('express');
const { cstsignup, verifyToken, getCustomer, refreshToken , cstlogin} = require('../Controllers/customer-auth-controller');
const { updateCustomer, deleteCustomer } = require('../Controllers/customer-controller');


const customerRouter = express.Router();

customerRouter.post('/signup', cstsignup);
customerRouter.post('/login', cstlogin);
customerRouter.get('/cus', verifyToken, getCustomer);
customerRouter.get('/refresh', refreshToken, verifyToken,getCustomer);
customerRouter.put('/update/:id', updateCustomer);
customerRouter.delete('/delete/:id', deleteCustomer);
//verify token



module.exports = customerRouter;
