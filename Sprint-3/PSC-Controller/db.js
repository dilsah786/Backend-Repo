const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: String,
  genre: String,
  release_date: String,
  director: String,
  actors: String,
  duration: Number,
  rating: Number,
  language: String,
});

const MovieModel = mongoose.model("movie", movieSchema);

const connection = mongoose.connect(
  "mongodb+srv://dilsah786:dilsah786@cluster0.z3e3wgc.mongodb.net/MovieDatabase"
);

module.exports = { connection, MovieModel };
