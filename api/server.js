// implement your server here
const express = require("express");
const server = express();

const dotenv = require("dotenv");

// SETUP CONFIG FILE VARIABLES
dotenv.config({
  path: "./config/config.env",
});

// BODY PARSER
server.use(express.json());

// IMPORTING ALL ROUTES
// const users = require("../routes");

// server.use("/api");

module.exports = server;
