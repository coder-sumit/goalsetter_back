const mongoose = require('mongoose');
const { DB_URL } = require("./index");
const url = DB_URL;


mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

module.exports = db;