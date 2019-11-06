'use strict'

var User = require("../models/user");

function home(req, res){
    res.status(200).send({
        message: "Bienvenido al home"
    })
}

function pruebas(req, res){
    res.status(200).send({
        message: "Bienvenido a pruebas"
    })
}

module.exports = {
    home,
    pruebas
}
