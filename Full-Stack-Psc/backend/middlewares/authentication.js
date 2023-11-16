 const jwt = require("jsonwebtoken");
const { decode } = require("punycode");
require('dotenv').config();
 const authentication = (req,res,next)=>{
    if(!req.headers.authorization){
       return res.send("Please Login Again")
    }
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,process.env.JWT_SECRET_KEY, function(err,decoded){
         if(err){
            res.send("Please Login Again")
         }else{
            req.body.userId = decoded.userId
            next();
         }
    })
 }


 module.exports = {authentication}