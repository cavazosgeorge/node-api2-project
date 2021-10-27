const express = require("express");
const Post = require("./posts-model");
const router = express.Router();

module.exports = router;

// ENDPOINT METHOD(GET) => RETURN ALL POSTS
router.get("/", (req, res) => {
  Post.find()
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "The posts information could not be retrived",
        err: err.message,
        stack: err.stack,
      });
    });
});

// ENDPOINT METHOD(GET) => RETURN POSTS BY ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({
        success: false,
        message: "The post with the specified ID does not exist",
      });
    } else {
      res.json(post);
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "The post information could not be retrieved",
      err: err.message,
      stack: err.stack,
    });
  }
});

// ENDPOINT METHOD(POST) => CREATE A NEW POST
router.post("/", (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents) {
    res.status(400).json({
      success: false,
      message: "Please provide contents and title for the post",
    });
  } else {
    Post.insert({ title, contents })
      .then(({ id }) => {
        return Post.findById(id);
      })
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "There was an error while saving the post to the database",
          err: err.message,
          stack: err.stack,
        });
      });
  }
});
