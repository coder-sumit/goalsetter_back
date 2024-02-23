const express = require("express");
const router = express.Router();


router.use("/student", require("./studentRoutes"));

module.exports = router;