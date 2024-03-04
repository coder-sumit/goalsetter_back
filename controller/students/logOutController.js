const Student = require("../../models/Student");
const badRequestError = require("../../lib/badRequestError");
const refressToken = require("../../models/Refress_Token");

const logout = async(req, res, next)=>{
    try{
        let username = req.user.username;

        let tokenDoc = await refressToken.findOne({username,});

        if(!tokenDoc){
            return res.status(400).json(badRequestError("No Login Records Available!"));
        }

        await refressToken.findByIdAndDelete(tokenDoc._id);



       
        //  badRequestError
        return res.status(200).json({
            success: true,
            message: "Logged Out Successfully!"
        });

    }catch(err){
        next(err);
    }
}

module.exports = logout;