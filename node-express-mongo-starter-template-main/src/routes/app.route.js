const express = require("express");
const AppController = require("../controllers/app.controller");

//Setting up the Express Router
const Router = express.Router();

//Setting up Routes
Router.post("/register", AppController.register)
Router.post("/login", AppController.login)

module.exports = Router;