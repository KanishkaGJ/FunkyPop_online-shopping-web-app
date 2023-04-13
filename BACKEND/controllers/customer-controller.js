const Customer = require('../models/customer');
const bcrypt = require('bcryptjs');

 const cstsignup = async(req, res, next)=>{

    const{CustomerName, CustomerEmail, ContactNum,Address,CusUsername, CusPassword} = req.body;
    let existingCustomer;

    try{
        existingCustomer = await Customer.findOne({
            CustomerEmail: CustomerEmail
        });

    }catch(err){
        console.log(err);   
    }

    if(existingCustomer){
        return res.status(400).jason({
            message: "User already exists, Login instead"
        })
    }

    //encrypt the password 
    const hashPassword = bcrypt.hashSync(CusPassword);

    const customer = new Customer({
        CustomerName,
        CustomerEmail,
        ContactNum,
        Address,
        CusUsername,
        CusPassword: hashPassword
    });

    //save the object to db document 
    try{
        await customer.save();
    }catch(err){
        console.log(err)
    }

    return res.status(201).json({
        message: customer
    })
 }

 exports.cstsignup = cstsignup;