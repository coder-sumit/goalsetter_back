const dotenv = require("dotenv");

dotenv.config();

const {APP_PORT, DB_URL} = process.env;

module.exports = {APP_PORT, DB_URL};