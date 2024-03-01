const badRequestError = require("../../lib/badRequestError");
const Goal = require("../../models/Goal");

const updateGoal = async(req, res, next)=>{
    try{
       let body = req.body;
       let student_id = req.user._id;

       let data = {};

       if(!body.goal_id){
          return res.status(400).json(badRequestError("goal_id is required!"));
       }

         // find goal
         let goal = await Goal.findById(goal_id);

         if(!goal){
           return res.status(400).json(badRequestError("Goal not Found!"));
         }
  
         if(goal.student_id != student_id){
           return res.status(401).json(badRequestError("You can not delete others goal's"));
         }

       if(body.required_hours){
          data.required_hours = body.required_hours;
       }
       if(body.goal_name){
          data.goal_name = body.goal_name;
       }
       if(body.estimated_completion_date){
          data.estimated_completion_date = body.estimated_completion_date;
       }
       if(body.isDefault){
        data.isDefault = body.isDefault;
       }

       delete body.goal_id;



       

      // update goal
      await Goal.findByIdAndUpdate(body.goal_id, data);


      return res.status(200).json({
        success: true,
        message: "Goal Updated Successfully!"
      });
       

    }catch(err){
        return next(err);
    }
}

module.exports = updateGoal;