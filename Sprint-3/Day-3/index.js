const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const { connection, UserModel } = require("./db");


const app = express();

app.use(express.json())

const token = Math.random(10000);

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    const hashedpass = user?.password
    bcrypt.compare(password, hashedpass).then(function(result) {
        // result == true

    if(result){
        res.send({status:"Logged in" , token:token})
    }else{
        res.send("Logged in Failed" )
    }
});
})


app.post("/signup",async(req,res)=>{
    const {email,password} = req.body;
    bcrypt.hash(password, 4).then(async function(hash) {
        // Store hash in your password DB.
        const user = await UserModel.create({email,password:hash})
    if(user){
        res.send("Registered " + user)
    }else{
        res.send("Not Registered " )
    }
});
})


app.get("/products",async(req,res)=>{
    const token1 = req.query.token;
    if(token1===token){
        res.send("All products are here for you ")
    }else{
        res.send("Login First")
    }
    
})


app.listen(8000, async (req, res) => {
    try {
      await connection;
      console.log("Connected to Database");
    } catch (err) {
      console.log(err);
    }
    console.log("App is running on port 8000");
  });
  