const express = require("express");
const { UserModel } = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = express.Router();

require("dotenv").config();       // to use all data from .env file


//  Registering user code starts here

userController.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await UserModel.find({ email: email });
  if (existingUser) {
    return res.json({ status: "Ohh No", data: "user already exists " });
  }
  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      console.log("error occurred while creating password");
    }
    const newUser = await UserModel.create({
      name: name,
      email: email,
      password: hash,
    });
  });
  res.json({ status: "success", data: "New User registered", user: name });
});

//  Registering user code end here


/*  -------------------------------------------------*/


//  Login user code starts here
userController.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  if (email === "" || password === "") {
    return res.json("Please enter correct credentials");
  }
  const existingUser = await UserModel.findOne({ email: email });
  const hashed_Password = existingUser.password;

  bcrypt.compare(password, hashed_Password, async function (err, result) {
    if (err || !result) {
      console.log("error occurred while logging ");
      res.json({
        status: "Error",
        message: "Please enter correct credentials to log in",
      });
    } else {
      const token = jwt.sign({ userId: existingUser._id }, process.env.secretToken);
      res.json({
        status: "User Logged in Successfully",
        data: [
          { name: existingUser.name, email: existingUser.email, token: token },
        ],
      });
    }
  });
});

//  Login user code end here
module.exports = { userController };
