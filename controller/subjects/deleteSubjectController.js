const badRequestError = require("../../lib/badRequestError");
const Subject = require("../../models/Subject");

const deleteSubject = async(req, res, next)=>{
    try{
      let {subject_id}= req.query;

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
        return res.status(401).json(badRequestError("you can't delete others subjects"));
      }



      await Subject.findByIdAndDelete(subject_id);

      return res.status(201).json({
        success: true,
        message: "Subject Deleted Successfully!"
      });

    }catch(err){
        return next(err);
    }
}

module.exports = deleteSubject;