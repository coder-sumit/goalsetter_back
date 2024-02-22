const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  qualification: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  }
},
{
  timestamps: true
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


