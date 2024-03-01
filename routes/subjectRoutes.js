const express = require("express");
const router = express.Router();
const {createSubject} = require("../controller/subjects");
const auth = require("../middleware/auth")

router.post("/createSubject", auth, createSubject);


module.exports = router;