// Notes Router

const { Router } = require("express");
const { NotesModel } = require("../db");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const notesController = Router();

// Getting Notes

notesController.get("/", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  const notes = await NotesModel.find({ userId: userId });
  res.json({ notes: notes });
});

// Creatint Posts
notesController.post("/create", async (req, res) => {
  const { title, author, userId } = req.body;
  const newNote = await NotesModel.create({
    title,
    author,
    userId,
  });
  console.log(title, author, userId);
  res.json({ message: "Notes Created", newNote: newNote });
});

// Deleting Posts
notesController.delete("/delete/:id", async (req, res) => {
  const deleteId = req.params.id;
  const deletedNotes = await NotesModel.findOneAndDelete({
    _id: deleteId,
    userId: req.body.userId,
  });
  console.log(deleteId);
  console.log(req.body.userId);

  if (deletedNotes) {
    res.json({ status: "Notes Deleted" });
  } else {
    res.json({ status: "Unable to Delete" });
  }
});

// Updating the Post
notesController.patch("/edit/:id", async (req, res) => {
  const updateId = req.params.id;
  const updateBody = req.body;

  try {
    const UpdatedNote = await NotesModel.findOneAndUpdate(
      { _id: updateId, userId: req.body.userId },
      updateBody,
      { new: true }
    );
    console.log(updateBody);
    console.log(updateId);

    if (UpdatedNote) {
      console.log({ UpdatedNote: UpdatedNote });
    } else { 
      res.json({ msg: "Not Updated" });
    }
  } catch (err) { 
    console.error("Error updating note:", err);
    res.status(500).json({ status: "Internal Server Error" });
  }
});

module.exports = { notesController };
