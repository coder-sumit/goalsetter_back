const express = require("express");
const router = express.Router();
const {createGoal} = require("../controller/goals");
const auth = require("../middleware/auth");


router.post("/createGoal", auth, createGoal);






module.exports = router;