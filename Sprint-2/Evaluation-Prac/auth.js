// Auth.js

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtSecretKey = "1234";
const User = require("../models/user");

router.post("/signup", async (req, res) => {
  const { name, age, email, city, phone_no, password } = req.body;
  try {
    const newUser = new User({ name, age, email, city, phone_no, password });
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({
        message: "Login successful",
        jwttoken: `${jwtSecretKey}`,
      });
    } else {
      res.status(401).send("Login failed");
    }
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
