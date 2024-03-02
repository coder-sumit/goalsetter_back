const badRequestError = require("../../lib/badRequestError");
const Task = require("../../models/Task");

const getTaskByGoal = async(req, res, next)=>{
   try{
        let goal_id = req.query.goal_id;
        let status = req.query.status;

        if(!goal_id){
            return res.status(400).json(badRequestError("goal_id is required!"))
        }

        let data = [];

        if(status){
            data = await Task.find({goal_id, status,});
        }else{

            data = await Task.find({goal_id,});
        }




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

module.exports = getTaskByGoal;