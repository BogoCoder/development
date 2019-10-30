'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/socialNet",
{userMongoClient:true})
    .then(()=> {console.log("successful as fucking fuck")
    app.listen(port, () => {console.log("web server running in port 3800")})})
    .catch(err => console.log(err))