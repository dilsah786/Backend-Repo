const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Blog.js

router.get("/", async (req, res) => {
  const category = req.query.category;
  try {
    let blogs = await Blog.find();
    if (category) {
      blogs = await Blog.find({ category });
    }
    res.json(blogs);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.post("/create", async (req, res) => {
  const { title, content, author, category } = req.body;
  try {
    const newBlog = new Blog({
      title,
      content,
      author,
      category,
      timestamp: Date.now(),
    });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Blog.js

router.put("/:blogID", async (req, res) => {
  const blogID = req.params.blogID;
  const { title, content, category } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogID,
      { title, content, category },
      { new: true }
    );
    res.json(blog);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

router.delete("/:blogID", async (req, res) => {
  const blogID = req.params.blogID;
  try {
    await Blog.findByIdAndRemove(blogID);
    res.status(204).send();
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
