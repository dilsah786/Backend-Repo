const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.json({ message: "Please login first" });
  }
  const token = auth.split(" ")[1];

  jwt.verify(token, process.env.secretToken, function (err, decoded) {
    if (err) {
      return res.json({ message: "Please login first" });
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = { authMiddleware };
