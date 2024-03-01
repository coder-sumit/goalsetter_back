const express = require("express");
const router = express.Router();
const {createTask} = require("../controller/tasks");
const auth = require("../middleware/auth")

router.post("/createTask", auth, createTask);


module.exports = router;