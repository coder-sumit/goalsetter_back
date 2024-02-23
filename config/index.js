const dotenv = require("dotenv");

dotenv.config();

const {APP_PORT, DB_URL, DEBUG_MODE, JWT_SECRET} = process.env;

module.exports = {APP_PORT, DB_URL, DEBUG_MODE, JWT_SECRET};