const {Router} = require("express");
const { NotesModel } = require("../db");
const jwt = require("jsonwebtoken")

require('dotenv').config()

const notesController = Router();




notesController.get("/",async(req,res)=>{
  res.send("notes")

})


notesController.post("/create",async(req,res)=>{
  const body = req.body;
   const newNote = await NotesModel.create(body)
  res.send({message:"Post Notes" ,newNote:newNote})
})



module.exports={notesController}