const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UserModel = mongoose.model('user', userSchema);

const connection = mongoose.connect("mongodb+srv://dilsah786:dilsah786@cluster0.z3e3wgc.mongodb.net/Authentication")

module.exports = {connection,UserModel};



