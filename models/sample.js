const sequelize = require('sequelize');
var mariaConnection = require('../database/connection');


var Sample = mariaConnection.define('sample', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: sequelize.STRING,
  
}, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'sample'
    });

    module.exports={
        Sample: Sample
    }