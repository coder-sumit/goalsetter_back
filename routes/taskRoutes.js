const express = require("express");
const router = express.Router();
const {createTask, updateTask} = require("../controller/tasks");
const auth = require("../middleware/auth")

router.post("/createTask", auth, createTask);
router.put("/updatetask", auth, updateTask);


module.exports = router;