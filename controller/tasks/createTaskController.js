const badRequestError = require("../../lib/badRequestError");
const Task = require("../../models/Task");


const createTask = async(req, res, next)=>{
     try{
        let {goal_id, task_title, task_subject_id, task_description, target_hour} = req.body;
        let student_id = req.user._id;
        
        if(!(goal_id && task_title && task_subject_id && task_description && target_hour)){
            return res.status(400).json(badRequestError("goal_id, task_title, task_subject_id, task_description, target_hour are required!"));
        }

        let data = {goal_id, task_title, task_subject_id, task_description, target_hour, student_id};

        let response = await Task.create(data);

        return res.status(201).json({
            success: true,
            message: "Task Created Successfully!",
            data: response
        });
        



     }catch(err){
        return next(err);
     }
}

module.exports = createTask;