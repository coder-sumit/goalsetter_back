const express = require("express");
const router = express.Router();


router.use("/student", require("./studentRoutes"));
router.use("/goal", require("./goalRoutes"));
router.use("/subject", require("./subjectRoutes"));
router.use("/task", require("./taskRoutes"));

module.exports = router;