const badRequestError = require("../../lib/badRequestError");
const Task = require("../../models/Task");


const deleteTask = async(req, res, next)=>{
    try{
        let {task_id} = req.query;
        let student_id = req.user._id;

        if(!task_id){
            return res.status(400).json(badRequestError("task_id is requiored!"));
        }

        // find task
        let task = await Task.findById(task_id);

        if(!task){
            return res.status(400).json(badRequestError("Task Not Found!"));
        }

        if(student_id != task.student_id){
            return res.status(401).json(badRequestError("You can't delete other's taks!"))
        }

        await Task.findByIdAndDelete(task_id);

        return res.status(200).json({
            success: true,
            message: "Successfully Deleted Task!"
        })

    }catch(err){
        return next(err);
    }

}

module.exports = deleteTask;