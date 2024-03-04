const register = require("./registerController");
const checkUsername = require("./checkUsernameController");
const login = require("./loginController");
const me = require("./meController");
const getAccessToken = require("./getAccessToken");
const checkTokenValidity = require("./checkTokenValidity");
const editProfile = require("./editProfile");
const changePassword = require("./changePassword");
const logout = require("./logOutController");

module.exports = {register, checkUsername, login, me,logout, getAccessToken, checkTokenValidity, editProfile, changePassword};