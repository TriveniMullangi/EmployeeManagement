var logger = require('../util/logger');
var HTTP_CODES = require('../util/statuscodes');
var employeeModel = require('../models/emp.model');

//This function is used to insert employee data

var addEmployee = async (req,res,next)=>{
    console.log("URL hit to :",req.hostname,req.originalUrl);
    logger.info("Entered into post Employee service");

    try{
        let payLoad = req.body;
        if(payLoad != undefined)
        {
            let empData = await employeeModel.Employee.create(payLoad);
            res.status(HTTP_CODES.OK).send({
                "statusCode" : HTTP_CODES.OK,
                "info":"Employee Data inserted",
                "employees" : empData
            })
        }
    }
    catch(e)
    {
        next(e);
    }
    }

//Get All employees data

var getAllEmployees = async(req,res,next)=>{
 
        //logger
        console.log("URL hit to :",req.hostname,req.originalUrl);
        //logger.info("URL hit to :",req.hostname);
        logger.info("Entered into get AllEmployess Service");
        try 
        {
            let empData =  await employeeModel.Employee.findAll();
         // console.log()
             res.status(HTTP_CODES.OK).send({
            "statusCode": HTTP_CODES.OK,
            "info": "List of Employees",
            "employees": empData
            })
        }
        catch (e) 
        {
            logger.error(e.message);
    
        }
    }

    var getEmployeeById = async (req, res, next) => {
        console.log("URL hit to :",req.hostname,req.originalUrl);
        //logger.info("URL hit to :",req.hostname);
        logger.info("Entered into get Employee By ID  Service");
        try 
        {
            const id = req.params.id;
            let empData = await employeeModel.Employee.findOne({
                where: {
                    id: id
                  }
            })
            //console.log(empData);
            res.status(HTTP_CODES.OK).send({
            "statusCode": HTTP_CODES.OK,
            "info": "Successfully updatedEmployee Data",
            "employee": empData
            })
        }
        catch(e){
            return next(e);
        }
    }

    var updateEmployee = async (req, res, next) => {
        console.log("URL hit to :",req.hostname,req.originalUrl);
        //logger.info("URL hit to :",req.hostname);
        logger.info("Entered into update Employee Service");
        try 
        {
            const id = req.params.id;
            let empData = await employeeModel.Employee.update(req.body,
            {
                where: {
                      id: id
                    }
            })
            res.status(HTTP_CODES.OK).send({
            "statusCode": HTTP_CODES.OK,
            "info": "Successfully updatedEmployee Data",
            
            })
        }
        catch(e){
            return next(e);
        }
    }


module.exports={
    getAllEmployees : getAllEmployees,
    addEmployee : addEmployee,
    updateEmployee : updateEmployee,
    getEmployeeById : getEmployeeById
    
}