const mongoose = require("mongoose");


const signSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const signUpModel = mongoose.model("authDetails",signSchema)


module.exports={signUpModel}