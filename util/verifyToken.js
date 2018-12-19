const jwt = require('jsonwebtoken');
const logger = require('../util/logger');
const statusCode = require('../util/statusCodes');

var verifyToken = async (req,res,next)=>{

    var token = req.headers['token'];
    try{
    if (!token) {
                logger.error("No Access Token Provided");
        
                res.status(401).send({
                    "statusCode": statusCode.UNAUTHORIZED,
                    "info": "Failed to Authenticate token."
                });
            }
            else {
                await jwt.verify(token, "SECRET_KEY", function (err, decoded) {
                    if (err) {
                        logger.error("Failed to Authenticate token.");
                        res.status(401).send({
                            "statusCode": statusCode.UNAUTHORIZED,
                            "info": "Failed to Authenticate token.",
                            "error": err.name + ' - ' + err.message
                        });
                    }
                    else {
                        next();
                    }
                });
            }
        }
    catch(e)
    {
        logger.error(e);
    }
}

module.exports = verifyToken;