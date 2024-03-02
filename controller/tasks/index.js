const createTask = require("./createTaskController");
const updateTask = require("./updateTaskController");
const deleteTask = require("./deleteTaskController");
const getTaskByGoal = require("./getTasksByGoalController");

module.exports = {createTask, updateTask, deleteTask, getTaskByGoal};