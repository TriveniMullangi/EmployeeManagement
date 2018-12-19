var joi = require('joi');

var userSchema ={
    body:{
    firstname:joi.string().required(),
    lastname:joi.string().allow(null).allow(""),
    email:joi.string().required(),
    password:joi.string().required(),
    isDeleted:joi.number().required()
    }
}

module.exports={
    userSchema:userSchema
}