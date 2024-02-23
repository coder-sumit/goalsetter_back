const JwtService = require("../services/JwtService");
const badRequestError = require("../lib/badRequestError");

const auth = async(req, res, next)=>{
      try{
        let access_token = req.headers.authorization;
        access_token = access_token.split(" ")[1];

        if(!access_token){
            return res.status(401).json(badRequestError("Unauthorised!"));
        }
        
        let {_id, username} = await JwtService.verify(access_token);
        req.user = {_id, username};
        next();
       
      }catch(err){
        return res.status(401).json(badRequestError("Unauthorised!"));
      }
}

module.exports = auth;