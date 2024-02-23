const Student = require("../../models/Student");
const badRequestError = require("../../lib/badRequestError");
const JwtService = require("../../services/JwtService");
const bcrypt = require("bcrypt");
const {REFERESS_SECRET} = require("../../config");

const login = async (req, res, next) => {
  try {
    let { username, password } = req.body;

    // Find the student by username
    const student = await Student.findOne({ username });

    // If the student doesn't exist, or the password is incorrect, return an error response
    if (!student || !(await bcrypt.compare(password, student.password))) {
      return res.status(401).json(badRequestError("Invalid username or password"));
    }

    // access token
    const access_token = await JwtService.sign({
        _id: student._id,
        username: student.username
    });

    // refress token
    const refress_token = await JwtService.sign({
      _id: student._id,
      username: student.username
    }, "1y", REFERESS_SECRET);

    return res.status(200).json({
      success: true,
      data: {
       access_token,
       refress_token,
      }
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = login;
