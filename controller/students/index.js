const register = require("./registerController");
const checkUsername = require("./checkUsernameController");
const login = require("./loginController");
const me = require("./meController");
const getAccessToken = require("./getAccessToken");

module.exports = {register, checkUsername, login, me, getAccessToken};