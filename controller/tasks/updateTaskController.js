const badRequestError = require("../../lib/badRequestError");
const Task = require("../../models/Task");


const updateTask = async(req, res, next)=>{
     try{
        let { task_title, task_description, target_hour, task_id} = req.body;
        let student_id = req.user._id;

        if(!task_id){
            return res.status(400).json(badRequestError("task_id is required!"));
        }

        // find task
        let task = await Task.findById(task_id);

        if(!task){
            return res.status(400).json(badRequestError("task not found!"));
        }

        if(student_id != task.student_id){
            return res.status(400).json(badRequestError("You can not update other's taks!"))
        }

        let data = {};
        if(task_title){
            data.task_title = task_title;
        }
        if(task_description){
            data.task_description = task_description;
        }
        if(target_hour){
            data.target_hour = target_hour;
        }

        await Task.findByIdAndUpdate(task_id, data);



        return res.status(200).json({
            success: true,
            message: "Task Updated Successfully!"
        });
        



     }catch(err){
        return next(err);
     }
}

module.exports = updateTask;