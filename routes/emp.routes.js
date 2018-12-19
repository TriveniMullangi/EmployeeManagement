const express = require('express');
const router = express.Router();
const expressJoi=require('express-joi-validator');
const requestSchema = require('../schemas/emp.schema');
const employeeService = require('../services/emp.service');


router.get('/getAllEmployees',employeeService.getAllEmployees);
router.get('/getEmployeeById/:id',employeeService.getEmployeeById);
router.post('/addEmployee',expressJoi(requestSchema.empSchema),employeeService.addEmployee);
router.put('/updateEmployee/:id',expressJoi(requestSchema.addEmployeeSchema), employeeService.updateEmployee);


module.exports = router;
