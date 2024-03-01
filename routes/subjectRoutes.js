const express = require("express");
const router = express.Router();
const {createSubject, updateSubject, getSubjectByGoal, deleteSubject} = require("../controller/subjects");
const auth = require("../middleware/auth")

router.post("/createSubject", auth, createSubject);
router.put("/updateSubject", auth, updateSubject);
router.get("/getSubjectByGoal", auth, getSubjectByGoal);
router.delete("/deleteSubject", auth, deleteSubject);



module.exports = router;