const Goal = require("../../models/Goal");

const getGoalsOfUser = async(req, res, next)=>{
    try{

        let student = req.user._id;

        // find all goals of student
        let data = await Goal.find({student_id: student});
      
        return res.status(200).json({
            success: true,
            message: "Fetched Data!",
            data,
            size: data.length
          });

    }catch(err){
        return next(err);
    }
}

module.exports = getGoalsOfUser;