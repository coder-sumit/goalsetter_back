const badRequestError = require("../../lib/badRequestError");
const Goal = require("../../models/Goal");

const createGoal = async(req, res, next)=>{
    try{
       let {required_hours, goal_name, estimated_completion_date} = req.body;

       if(!(required_hours && goal_name && estimated_completion_date)){
           return res.status(400).json(badRequestError("required_hours, goal_name and estimated_completion_date is required!"));
       }

       let student_id = req.user._id;
       let data = {student_id,required_hours, goal_name,
         estimated_completion_date: new Date(estimated_completion_date) };

       // get goal count of user
       let goals = await Goal.find({student_id});

       if(goals.length == 0){
        data.isDefault = true;
       }

       let response = await Goal.create(data);

      return res.status(201).json({
        success: true,
        message: "Goal Created Successfully!",
        data: response
      });
       

    }catch(err){
        return next(err);
    }
}

module.exports = createGoal;