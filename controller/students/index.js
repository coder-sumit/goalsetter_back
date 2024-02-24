const register = require("./registerController");
const checkUsername = require("./checkUsernameController");
const login = require("./loginController");
const me = require("./meController");
const getAccessToken = require("./getAccessToken");
const checkTokenValidity = require("./checkTokenValidity");
const editProfile = require("./editProfile");

module.exports = {register, checkUsername, login, me, getAccessToken, checkTokenValidity, editProfile};