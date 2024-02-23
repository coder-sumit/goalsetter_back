const dotenv = require("dotenv");

dotenv.config();

const {APP_PORT, DB_URL, DEBUG_MODE} = process.env;

module.exports = {APP_PORT, DB_URL, DEBUG_MODE};