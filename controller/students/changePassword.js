const Student = require("../../models/Student");
const badRequestError = require("../../lib/badRequestError");
const bcrypt = require("bcrypt");

const changePassword = async(req, res, next)=>{
    try{
        // Extract data from request body
        const { _id, oldPassword, password, cpassword} = req.body;

         // check user authorisation
         if(_id != req.user._id){
            return res.status(401).json(badRequestError("You are unautherized for this task!"))
        }

        // check if old and new is same
        if(oldPassword == password){
            return res.status(400).json(badRequestError("Old and New password could not be same!"))
        }

        // verify old password
       let student = await Student.findById(req.user._id);
       let isCorrectPass = await bcrypt.compare(oldPassword, student.password);

       if(!isCorrectPass){
          return res.status(400).json(badRequestError("Invalid Old Password!"));
       }

        // check for password
        if(password != cpassword){
            return res.status(400).json(badRequestError("password and cpassword should be same!"));
        }
       

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = { 
            password: hashedPassword
        };

        await Student.findByIdAndUpdate(_id, data);
        //  badRequestError
        return res.status(200).json({
            success: true,
            message: "Changed password Successfully!"
        });

    }catch(err){
        next(err);
    }
}

module.exports = changePassword;