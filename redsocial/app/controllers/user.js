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

function saveUser(req, res){
    var params = req.body;
    var user = new User();

    if(params.name && params.email && params.password && params.nick){
        user.name = params.name;
        user.nick = params.nick;
        user.birthdate = params.birthdate;
        user.surname = params.surname;
        user.email = params.email;
        user.role = params.role;
        user.image = params.image;

        // Aqui vamos a ahacer algo con el password

        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;
            user.save((err, userStored)=>{
                if(err){
                    return res.status(500).send({message: "Error saving data"});
                }
                if(userStored){
                    return res.status(200).send({user})

                }
                else{
                    return res.status(404).send({message: "Something failed"})
                } 

            })
        })
    }
}

function login(){
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({email: email}, (err, user) =>{
        if(err){
            return res.status(500).send({message: 
            "Error al consultar en la base de datos"})
        }
        if(user){
            bcrypt.compare(password, user.password, (err,check) => {
                if(err){ return res.status(404).send({message: "El usuario o la contraseña son incorrectos"})}
            })
        }
    })

}

module.exports = {
    home,
    pruebas,
    saveUser
}
