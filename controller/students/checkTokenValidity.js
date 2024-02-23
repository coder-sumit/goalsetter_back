const badRequestError = require("../../lib/badRequestError");
const JwtService = require("../../services/JwtService");


const checkTokenValidity = async (req, res, next) => {
    try{
        let access_token = req.headers.authorization;
        access_token = access_token.split(" ")[1];

        if(!access_token){
            return res.status(401).json(badRequestError("Unauthorised!"));
        }
        
        let {_id, username} = await JwtService.verify(access_token);
        
        return res.status(200).json({
            success: true,
            isValid: true

        });
       
      }catch(err){
        return res.status(401).json({
            success: false,
            isValid: false

        });
      }
};

module.exports = checkTokenValidity;
