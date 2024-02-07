const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
});

const UserModel = mongoose.model("User", userSchema);

const connection = mongoose.connect(
  "mongodb+srv://dilsah786:dilsah786@cluster0.z3e3wgc.mongodb.net/mydb"
);

module.exports = { connection, UserModel };
