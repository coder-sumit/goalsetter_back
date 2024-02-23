const express = require("express");
const router = express.Router();
const {register, checkUsername, login} = require("../controller/students");

router.post("/register", register);
router.post("/login", login);
router.get("/checkUsername", checkUsername);


module.exports = router;