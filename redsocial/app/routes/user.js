'use strict'

var express = require("express");
var UserController;
UserController = require("../controllers/user");

var auth = require("../middlewares/auth")

var api = express.Router();

// Definir las rutas

api.get("/home", UserController.home);
api.get("/pruebas", auth.auth, UserController.pruebas);
api.post("/registrar", UserController.saveUser);
api.post("/login", UserController.login);

module.exports = api;
