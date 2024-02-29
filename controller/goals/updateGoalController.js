const badRequestError = require("../../lib/badRequestError");
const Goal = require("../../models/Goal");

const updateGoal = async(req, res, next)=>{
    try{
       let body = req.body;

       let data = {};

       if(!body.goal_id){
          return res.status(400).json(badRequestError("goal_id is required!"));
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