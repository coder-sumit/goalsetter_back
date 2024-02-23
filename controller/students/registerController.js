const Student = require("../../models/Student");
const badRequestError = require("../../lib/badRequestError");
const bcrypt = require("bcrypt");

const register = async(req, res, next)=>{
    try{
        // Extract data from request body
        const { fName, lName, mobile, username, qualification, password, cpassword, address } = req.body;

        // check for password
        if(password != cpassword){
            return res.status(400).json(badRequestError("password and cpassword should be same!"));
        }
        // check for all required data
        if(!(fName && lName && mobile && username && qualification && password)){
            return res.status(400).json(badRequestError("fName,lName, mobile, username, password and qualification are required!"));
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = {fName, lName, mobile, username, qualification, 
            password: hashedPassword, 
            address: address?address:""
        };

        let response = await Student.create(data);

        return res.status(201).json({
            success: true,
            message: "Registered Successfully!",
            data: response
        });

    }catch(err){
        next(err);
    }
}

module.exports = register;