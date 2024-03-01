const mongoose = require('mongoose');

// Define the schema
const taskSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  goal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal',
    required: true
  },
  task_title: {
    type: String,
    required: true
  },
  task_subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  task_description: {
    type: String,
    required: true
  },
  target_hour: {
    type: Number,
    required: true
  },
  completed_hour: {
    type: Number,
    default: 0,
    require: true

  },
  status: {
    type: String,
    enum: ['pending', 'working', 'completed'],
    default: 'pending',
    require: true
  }
},{
  timestamps: true
}
);

// Create a model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
