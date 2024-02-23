const mongoose = require('mongoose');

// Define the schema
const refressTokenSchema = new mongoose.Schema({
  refress_token: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  }
});

// Create a model
const refressToken = mongoose.model('refressToken', refressTokenSchema);

module.exports = refressToken;
