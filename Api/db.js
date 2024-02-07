const mongoose = require("mongoose");


const connection = mongoose.connect(
  "mongodb+srv://dilsah786:dilsah786@cluster0.z3e3wgc.mongodb.net/FirstApi"
);

module.exports = { connection };
