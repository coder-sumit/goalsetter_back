const express = require("express");
const router = express.Router();
const {createSubject, updateSubject, getSubjectByGoal} = require("../controller/subjects");
const auth = require("../middleware/auth")

router.post("/createSubject", auth, createSubject);
router.put("/updateSubject", auth, updateSubject);
router.get("/getSubjectByGoal", auth, getSubjectByGoal);


module.exports = router;