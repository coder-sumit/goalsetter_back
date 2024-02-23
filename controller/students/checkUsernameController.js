const Student = require("../../models/Student");
const badRequestError = require("../../lib/badRequestError");


const checkUsername = async(req, res, next)=>{
    try{
        let username = req.query.username;

        // check in db
        let data = await Student.find({username,});

        if(data.length > 0){
            return res.status(200).json({
                success: true,
                data: {
                    exists: true
                }
            })
        }

        return res.status(200).json({
            success: true,
            data: {
                exists: false
            }
        })

    }catch(err){
        next(err);
    }
}

module.exports = checkUsername;