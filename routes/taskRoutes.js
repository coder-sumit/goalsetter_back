const express = require("express");
const router = express.Router();
const {createTask, updateTask, deleteTask, getTaskByGoal} = require("../controller/tasks");
const auth = require("../middleware/auth")

router.post("/createTask", auth, createTask);
router.put("/updatetask", auth, updateTask);
router.delete("/deleteTask", auth, deleteTask);
router.get("/getTaskByGoal", auth, getTaskByGoal);


module.exports = router;