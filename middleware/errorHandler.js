const {DEBUG_MODE} = require("../config");
const errorhandler = (err, req, res, next)=>{
   let statusCode = 500;
   let data = {
    success: false,
    message: "Internal server error",
    ...(DEBUG_MODE === 'true' && {orignalError: err.message})
   } 
   return res.status(statusCode).json(data);
}

module.exports = errorhandler;