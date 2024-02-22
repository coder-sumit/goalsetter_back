const mongoose = require('mongoose');

// Define the schema
const goalSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  required_hours: {
    type: Number,
    required: true
  },
  goal_name: {
    type: String,
    required: true
  },
  estimated_completion_date: {
    type: String,
    required: true
  },
  isDefault: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
});

// Create a model
const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
