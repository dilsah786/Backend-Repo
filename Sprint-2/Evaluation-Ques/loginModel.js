const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String

})

const loginModel = mongoose.model("authDetails",loginSchema)

module.exports={loginModel}