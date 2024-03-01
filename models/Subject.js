const mongoose = require('mongoose');

// Define the schema
const subjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true
  },
  goal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal',
    required: true
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  }
});

// Create a model
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
