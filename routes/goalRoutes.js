const express = require("express");
const router = express.Router();
const {createGoal, updateGoal, getGoalsOfUser, deleteGoal} = require("../controller/goals");
const auth = require("../middleware/auth");


router.post("/createGoal", auth, createGoal);
router.put("/updateGoal", auth, updateGoal);
router.get("/getGoalsOfUser", auth, getGoalsOfUser);
router.delete("/deleteGoal", auth, deleteGoal);


module.exports = router;