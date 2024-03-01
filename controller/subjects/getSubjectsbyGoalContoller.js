const badRequestError = require("../../lib/badRequestError");
const Subject = require("../../models/Subject");

const getSubjectByGoal = async(req, res, next)=>{
    try{
      let goal_id= req.query.goal_id;

      if(!goal_id){
        return res.status(400).json(badRequestError("goal_id is required!"));
      }

      let data = await Subject.find({goal_id});

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

module.exports = getSubjectByGoal;