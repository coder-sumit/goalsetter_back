const badRequestError = require("../../lib/badRequestError");
const Subject = require("../../models/Subject");

const createSubject = async(req, res, next)=>{
    try{
      let {subject_name, goal_id}= req.body;

      let student_id = req.user._id;

      if(!(subject_name && goal_id)){
        return res.status(400).json(badRequestError("subject_name and goal_id is required1"))
      }

      let data = {student_id, subject_name, goal_id};

      let response = await Subject.create(data);

      return res.status(201).json({
        success: true,
        message: "Subject Created Successfully!",
        data: response
      });

    }catch(err){
        return next(err);
    }
}

module.exports = createSubject;