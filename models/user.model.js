
const sequelize = require('sequelize');
var mariaConnection = require('../database/connection');

//Model Schemaa for Employee Table
var User = mariaConnection.define('users', {
    id: { type: sequelize.BIGINT, autoIncrement: true, primaryKey: true },
    userid: sequelize.STRING,
    firstname: sequelize.STRING,
    lastname: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
    isDeleted:sequelize.BIGINT
}, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'user'
    });



module.exports = {

    User: User

};