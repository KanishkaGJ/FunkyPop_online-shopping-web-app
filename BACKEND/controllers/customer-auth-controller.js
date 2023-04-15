const Customer = require('../models/customer');
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');


//temporary secret key
const JWT_SECRET_KEY ="CusKey";

//function to sign up
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
        return res.status(400).json({
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



 //function to login
 const cstlogin = async(req,res,next)=>{
    const{CusUsername, CusPassword} = req.body;

    let existingCustomer;
    try{
        existingCustomer = await Customer.findOne({
            CusUsername: CusUsername
        });
    }catch(err){
        return new Error(err);
    }
    if(!existingCustomer){
        return res.status(400).json({
            message:"User not found. SignUp please"
        })
    }
    const isPasswordCorrect = bcrypt.compareSync(CusPassword, existingCustomer.CusPassword);
    if(!isPasswordCorrect){
        return res.status(400).json({
            message: "Invalid Username Password"
        })
    }

    //generate token
    const token = jwt.sign({id: existingCustomer._id}, JWT_SECRET_KEY, {
        expiresIn:"65s"
    });

    console.log("Generated Token\n", token);

    if(req.cookie[`${existingCustomer._id}`]){
        req.cookies[`${existingCustomer._id}`] = ""
    }

    //after the token is created, we are sending the cookie
    res.cookie(String(existingCustomer._id),token,{
        path: "/",
        expires: new Date(Date.now() + 1000*60),  //60 seconds
        httpOnly: true,
        sameSite: "lax",
    });


    return res.status(200).json({
        message: "Successfully logged in", customer:existingCustomer, token
    });
 };


 //verify the customer token
 const verifyToken = (req,res,next)=>{

    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    console.log(token);

    if(!token){
        res.status(404).json({
            message:"No token found"
        })
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, customer)=>{
        if(err){
            res.status(400).json({
                message: "Invalid token"
            })
        }
        console.log(customer.id);
        req.id = customer.id;
    });
    next();
 };

 
//get information of customer
 const getCustomer = async(req,res,next)=>{
    const cusId = req.id;
    let customer;
    try{
        customer = await Customer.findById(cusId,"-CusPassword");
    }catch(err){
        return new Error(err)
    }
    if(!customer){
        return res.status(404).json({
            message:"Customer not found"
        })
    }
    return res.status(200).json({customer})
 };

 //refresh the token
 const refreshToken = (req,res,next)=>{
    const cookies = req.headers.cookie;
    const preToken = cookies.split("=")[1];
    if(!preToken){
        return res.status (400).json({
            message: "Coudn't find token"
        })
    }
    jwt.verify(String(preToken),JWT_SECRET_KEY,(err,user)=>{
        if(err){
            console.log(err);
            return res.status(403).json({
                message: "Authentication failed"
            })
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({id:user.id}, JWT_SECRET_KEY,{
            expiresIn: "65s"
        });
        console.log("Regenerated token", token);

        res.cookie(String(user.id),token,{
            path: "/",
            expires: new Date(Date.now() + 1000*60),  //60 seconds
            httpOnly: true,
            sameSite: "lax",
        });

        req.id = user.id;
        next();
    });
 }

 exports.cstsignup = cstsignup;
 exports.cstlogin  = cstlogin;
 exports.verifyToken = verifyToken;
 exports.getCustomer = getCustomer;
 exports.refreshToken = refreshToken;