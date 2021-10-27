// implement your server here
const express = require("express");
const postsRouter = require("./posts/posts-router");
const server = express();

const dotenv = require("dotenv");

// SETUP CONFIG FILE VARIABLES
dotenv.config({
  path: "./config/config.env",
});

// BODY PARSER
server.use(express.json());

server.use("/api/posts", postsRouter);

module.exports = server;
