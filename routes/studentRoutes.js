const express = require("express");
const router = express.Router();
const {register, checkUsername, login, me, getAccessToken, checkTokenValidity, editProfile, changePassword} = require("../controller/students");
const auth = require("../middleware/auth")

router.post("/register", register);
router.post("/login", login);
router.get("/checkTokenValidity", checkTokenValidity);
router.get("/checkUsername", checkUsername);
router.post("/getAccessToken", getAccessToken);
router.get("/me",auth, me);
router.put("/editProfile", auth, editProfile);
router.put("/changePassword", auth, changePassword);


module.exports = router;