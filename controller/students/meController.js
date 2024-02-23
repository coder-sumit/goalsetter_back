const Student = require("../../models/Student");

const me = async(req, res, next)=>{
    try{
       let id = req.user._id;
       
       // find user
       let doc = await Student.findById(id).select("-password -__v -createdAt -updatedAt");

       return res.status(200).json({
        success: true,
        data: doc
       });
    }catch(err){
        return next(err);
    }
}

module.exports = me;