const badRequestError = require("../../lib/badRequestError");
const Goal = require("../../models/Goal");

const deleteGoal = async(req, res, next)=>{
    try{
       let {id} = req.query;
       let student_id = req.user._id;

       if(!id){
        return res.status(400).json(badRequestError("id is required!"));
       }

       // find goal
       let goal = await Goal.findById(id);

       if(!goal){
         return res.status(400).json(badRequestError("Goal not Found!"));
       }

       if(goal.student_id != student_id){
         return res.status(401).json(badRequestError("You can not delete others goal's"));
       }

       await Goal.findByIdAndDelete(id);


      return res.status(200).json({
        success: true,
        message: "Goal Deleted Successfully!"
      });
       

    }catch(err){
        return next(err);
    }
}

module.exports = deleteGoal;