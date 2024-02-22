const mongoose = require('mongoose');

// Define the schema
const taskComplitionUnitSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  task_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  time_in_hours: {
    type: Number,
    required: true
  }
});

// Create a model
const TaskComplitionUnit = mongoose.model('TaskComplitionUnit', taskComplitionUnitSchema);

module.exports = TaskComplitionUnit;
