"use strict"

var jwt = require("jwt-simple");
var moments = require("moment");
var secret = "semesterisover123"

function auth(req, res, next){
    if(!req.headers.auth){
        return res.status(403).send({
            mesage: "the app has not header of authentication"
        })
       
    }
    var token = req.headers.auth.replace(/['"]+/g, '');
    
    try{
        console.log("LLEGO",token, secret)
        var payload = jwt.decode(token, secret)
        console.log(payload)
        if(payload.exp <= moments().unix()){
            return res.status(401).send({
                message: "user not authorized"
            })
        }
    }
    catch(ex){
        return res.status(500).send({
            message: "Error authentication"
        })
    }
    req.user = payload;

    next();
}

module.exports = ({
    auth
})