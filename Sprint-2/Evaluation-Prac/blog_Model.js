
// Blog Model

const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  category: String,
  timestamp: Date,
});
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

