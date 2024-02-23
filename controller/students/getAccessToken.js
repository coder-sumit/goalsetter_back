const Student = require("../../models/Student");
const badRequestError = require("../../lib/badRequestError");
const JwtService = require("../../services/JwtService");
const bcrypt = require("bcrypt");
const { REFERESS_SECRET } = require("../../config");
const refressToken = require("../../models/Refress_Token");

const getAccessToken = async (req, res, next) => {
  try {
    let { refress_token } = req.body;

    if (!refress_token) {
      return res
        .status(401)
        .json(badRequestError("please provide refress token!"));
    }

    // find refress token in db
    let dbRtoken = await refressToken.findOne({refress_token,});

    if(!dbRtoken){
      return res.status(401).json(badRequestError("Invalid Refress Token!"));
    }

    // verify refress token
    let { _id, username } = await JwtService.verify(
      refress_token,
      REFERESS_SECRET
    );

    // access token
    const access_token = await JwtService.sign({
      _id,
      username,
    });

    // refress token
    refress_token = await JwtService.sign(
      {
        _id,
        username,
      },
      "1y",
      REFERESS_SECRET
    );

    // stotre refress token in db
    let dbrefressToken = await refressToken.findOne({username});

    if(!dbrefressToken){
      await refressToken.create({refress_token, username,});
    }else{
       await refressToken.updateOne({username,}, {refress_token});
    }

    return res.status(200).json({
      success: true,
      data: {
        access_token,
        refress_token,
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getAccessToken;
