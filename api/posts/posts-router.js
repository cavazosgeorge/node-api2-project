const express = require("express");
const Post = require("./posts-model");
const router = express.Router();

module.exports = router;

// ENDPOINT METHOD(GET)
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
