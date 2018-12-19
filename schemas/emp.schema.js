const Joi = require('joi');

var addEmployeeSchema = {
    body: {
        id:Joi.number().required(),
        firstName: Joi.string().required(),
        middleName: Joi.string().allow(null).allow(''),
        lastName: Joi.string().required(),
        gender: Joi.string().required().valid('M', 'F'),
        designation: Joi.string().required(),
        phoneNo: Joi.number().required(),
        email: Joi.string().email({ minDomainAtoms: 2 }),
        DOB: Joi.date().required(),
        
    }
};

module.exports = {
    addEmployeeSchema: addEmployeeSchema
}