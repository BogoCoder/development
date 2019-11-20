'use strict'

var User = require("../models/user");
var bcrypt = require('bcryptjs');
var token = require("../services/jwt");
var paginate = require("mongoose-paginate");

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
    console.log(params)
    if(params.name && params.email && params.password && params.nick){
        user.name = params.name;
        user.nick = params.nick;
        user.birthdate = params.birthdate;
        user.surname = params.surname;
        user.email = params.email;
        user.role = params.role;
        user.image = params.image;
        // Aqui vamos a hacer algo con el password
        
        bcrypt.hash(params.password, 5,  (err, hash) => {
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

            }) ; 
        }) ;
    }

    else{
        return res.status(200).send({message: "not enough input"});
    }
}

function login(req, res){
    var params = req.body;
    var email = params.email;
    var password = params.password;
    console.log(params.email);
    User.findOne({email: email}, (err, user) =>{
        if(err){
            return res.status(500).send({message: 
            "Error al consultar en la base de datos"})
        }
        if(user){
            console.log(password, user.password);
            bcrypt.compare(password, user.password, (err,check) => {
                if(check){
                    if(params.gettoken){
                        return res.status(200).send({token:token.createToken(user)})
                    }
                    else{
                        return res.status(200).send({user:user})
                    }
                }
                if(err){ return res.status(404).send({message: "El usuario o la contraseña son incorrectos"})}
                else{
                    return res.status(200).send({user:user})
                }
            })
        }
    })

}

function getUser(req, res){
    var userId= req.params.id;
    User.findById(userId, (err,user) => {
        if(err){
            return res.status(500).send({
                message: "An error in database"
            })
        }
        if(!user){
            return res.status(404).send({
                message:  "we don't find uspaginateer"
            })

        }
        return res.status(200).send({
            user
        })
    })
}


function getUsers(req, res){
    var identityId = req.user.sub;

    var page = 1;

    if(req.params.page){
        page = req.params.page
    }

    var itemsPerPage = 3;

    User.find.sort("_id").paginate(page, itemsPerPage, (err, users, total) =>{
        if(err){
            return res.status(500).send({
                message: "Error"
            })
        }

        if(!users){
            return res.status(404).send({
                message: "There are no users to show"
            })
        }

        return res.status(200).send({
            users:users,
            total,
            pages: Math.ceil(total/itemsPerPage)
        })
    })


}


module.exports = {
    home,
    pruebas,
    saveUser,
    login,
    getUser,
    getUsers
}
