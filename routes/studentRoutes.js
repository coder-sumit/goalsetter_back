const express = require("express");
const router = express.Router();
const {register, checkUsername, login, me} = require("../controller/students");
const auth = require("../middleware/auth")

router.post("/register", register);
router.post("/login", login);
router.get("/checkUsername", checkUsername);
router.get("/me",auth, me);


module.exports = router;