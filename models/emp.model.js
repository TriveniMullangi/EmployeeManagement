
const sequelize = require('sequelize');
var mariaConnection = require('../database/connection');

//Model Schemaa for Employee Table
let Employee = mariaConnection.define('employee', {
    id: { 
        type: sequelize.INTEGER, 
        autoIncrement: true,
         primaryKey: true 
    },
    firstName:sequelize.STRING,
    middleName: sequelize.STRING,
    lastName:sequelize.STRING,
    gender:sequelize.STRING,
    designation:sequelize.STRING,
    phoneNo:sequelize.STRING,
    email:sequelize.STRING,
    DOB:sequelize.DATE,
    isDelete :sequelize.INTEGER
}, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'employee'
    });

module.exports = {

    Employee: Employee

};