const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  // console.log(req.headers);
  if (!req.headers.authorization) {
    return res.json("Please Login ");
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
      res.json("Please Login Again");
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = { authentication };