const connection = require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "1234";
// Index.js
app.use(bodyParser.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    console.log(`${req.method} ${req.url}-${res.statusCode}-${duration}ms`);
  });
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the HomePage");
});

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  try {
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not Authorized" });
  }
};

const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

app.use("/blogs", authenticate, blogRoutes);
app.use("/", authRoutes);

app.listen(8005, async () => {
  try {
    await connection;
    console.log("connected to mongodb successfully");
  } catch (err) {
    console.log("error in db file");
    console.log(err);
  }
  console.log("listen to port 8005");
});
