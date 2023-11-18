const { Router } = require("express");
const { NotesModel } = require("../db");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const notesController = Router();

// Getting Notes

notesController.get("/notes", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  const notes = await NotesModel.find({ userId: userId });
  res.send(notes);
});

// Creatint Posts
notesController.post("/create", async (req, res) => {
  const { title, author, userId } = req.body;
  const newNote = await NotesModel.create({
    title,
    author,
    userId,
  });
  res.send({ message: "Post Notes", newNote: newNote });
});

// Deleting Posts
notesController.delete("/delete/:id", async (req, res) => {
  const deleteId = req.params.id;
  const deletedNotes = await NotesModel.findOneAndDelete({
    _id: deleteId,
    userId: req.body.userId,
  });
  if (deletedNotes) {
    res.send("Notes Deleted");
  } else {
    res.send("Unable to Delete");
  }
});

// Updating the Post
notesController.patch("/edit/:id", async (req, res) => {
  const updateId = req.params.id;
  const updateBody = req.body;
  try {
    const UpdatedNote = await NotesModel.findOneAndUpdate(
      { _id: updateId, userId: req.body.userId },
      { updateBody }
    );
    
    if (UpdatedNote) {
      res.send(UpdatedNote);
    } else {
      res.send("OOOps");
    }
  } catch (err) {
    console.error("Error updating note:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { notesController };
