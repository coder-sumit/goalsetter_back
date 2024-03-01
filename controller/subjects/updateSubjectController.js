const badRequestError = require("../../lib/badRequestError");
const Subject = require("../../models/Subject");

const updateSubject = async(req, res, next)=>{
    try{
      let {subject_name, subject_id}= req.body;

      let student_id = req.user._id;

      if(!subject_id){
        return res.status(400).json(badRequestError("subject_id is required!"))
      }

      // find subject
      let subject = await Subject.findById(subject_id);

      if(!subject){
        return res.status(400).json(badRequestError("Subject Not Found"));
      }

      if(subject.student_id != student_id){
        return res.status(401).json(badRequestError("you can't update others subjects"));
      }

      let data = {};
      if(subject_name){
        data.subject_name = subject_name;
      }

      await Subject.findByIdAndUpdate(subject_id, data);

      return res.status(201).json({
        success: true,
        message: "Subject Updated Successfully!"
      });

    }catch(err){
        return next(err);
    }
}

module.exports = updateSubject;