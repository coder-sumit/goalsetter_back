const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true
  },
  goal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal',
    required: true
  }
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
