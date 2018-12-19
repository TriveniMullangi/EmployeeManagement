var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection = require('./database/connection');
var utillogger =require('./util/logger');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var emproute = require('./routes/emp.routes');
//var userroute = require('./routes/user.routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/emp',emproute);
//app.use('/user',userroute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  var err=new Error('Not Found');
  err.status=400;
  err.info="Route not Found";
  next(err);
});
// error handler
app.use((err,req,res,next)=>{
  if(err.isBoom){
    var error={
      "statusCode":400,
      "info":"check request body",
      "error":err
    };
    res.status(400).send(error);
  }
  else
  {
    if (err.name == "SequelizeDatabaseError") {
      // console.log("Invalid Column Name");
      var errorMessage = {
        "statusCode": 404,
        "info": "Invalid Column Name / Check DB Columns",
        "error": err
      };
      res.status(404).send(errorMessage);
    }
    //DB Credentials Error
    else if (err.name == "SequelizeAccessDeniedError") {
      console.log("Invalid Password")
      var errorMessage = {
        "status": 500,
        "info": "DB Credentials Error",
        "error": err
      };
      res.status(500).send(errorMessage);
    }
    //404 Error
    else if (err.statusCode == 404) {
      var errorMessage = {
        "statusCode": parseInt(err.statusCode),
        "error": err
      };
      res.status(404).json(errorMessage);
    }
    //400 Error
    else if (err.statusCode == 400) {
      var errorMessage = {
        "statusCode": parseInt(err.statusCode),
        "info": "Bad Request",
        "error": err.error
      };
      res.status(400).json(errorMessage);
    }
    //500 Error
    else {
      res.status(500).send(err);
    }
  }

});
app.listen(3000,()=>{
  console.log("server is listening on port 3000");
})
module.exports = app;
