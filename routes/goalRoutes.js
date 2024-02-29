const express = require("express");
const router = express.Router();
const {createGoal, updateGoal} = require("../controller/goals");
const auth = require("../middleware/auth");


router.post("/createGoal", auth, createGoal);
router.put("/updateGoal", auth, updateGoal);


module.exports = router;