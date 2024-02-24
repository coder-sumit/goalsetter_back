const badRequestError = require("../../lib/badRequestError");
const Student = require("../../models/Student");


const editProfile = async(req, res, next)=>{
    try{
        // Extract data from request body
        const { _id, fName, lName, mobile,  qualification, address } = req.body;

        // check user authorisation
        if(_id != req.user._id){
            return res.status(401).json(badRequestError("You are unautherized for this task!"))
        }


        const data = {fName, lName, mobile,  qualification,
            address: address?address:""
        };

        await Student.findByIdAndUpdate(_id, data);
        //  badRequestError
        return res.status(201).json({
            success: true,
            message: "Updated Successfully!"
        });

    }catch(err){
        next(err);
    }
}

module.exports = editProfile;