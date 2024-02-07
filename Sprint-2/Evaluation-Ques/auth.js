const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const { signUpModel } = require("./signupModel");
const { loginModel } = require("./loginModel");

const jwtSecretKey = "1234";

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new signUpModel({ name, email, password });
    await newUser.save();
    res.status(201).json("User Created SuccessFully");
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginModel.findOne({ email, password });
    if (user) {
      res.json({
        message: "Login Successfully",
        jwtToken: jwtSecretKey,
      });
    } else {
      res.status(404).json("login Failed");
    }
  } catch (err) {
    console.log(err);
  }
});
