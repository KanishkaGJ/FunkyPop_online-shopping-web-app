const express = require('express');
const { cstsignup } = require('../controllers/customer-controller');

const customerRouter = express.Router();

customerRouter.post('/cstsignup', cstsignup);

module.exports = customerRouter;