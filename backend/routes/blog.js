const express = require("express");
const Blog = require("../model/blog");
const router = express.Router();

// Tüm Ürünleri Alalım
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json("Server Status");
  }
});
router.post("/", async (req, res) => {
  try {
    const myData = req.body;
    const newBlog = new Blog(myData);
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//export etmemiz gerekli!
module.exports = router;
