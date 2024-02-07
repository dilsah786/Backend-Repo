const fs = require("fs");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {type:String,required:true},
  age: Number,
  rank: Number,
  city: String,
});

const modelName = mongoose.model("user", userSchema);

const connection =  mongoose.connect(
  "mongodb+srv://dilsah786:dilsah786@cluster0.z3e3wgc.mongodb.net/mydb"
);


module.exports={connection,modelName}