const mongoose = require("mongoose");
require('dotenv').config()
  
const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
})
  
const notesSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    userId:{type:String,required:true}
})


const UserModel = mongoose.model("user",userSchema);

const NotesModel = mongoose.model("note",notesSchema);

const connection = mongoose.connect(process.env.Mongo_Url)

module.exports = {connection,UserModel,NotesModel}