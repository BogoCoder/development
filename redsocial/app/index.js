'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/socialNet",
{userMongoClient:true})
    .then(()=> console.log("successful as fucking fuck"))
    .catch(err => console.log(err))