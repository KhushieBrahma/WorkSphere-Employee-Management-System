const Task = require("../models/Task");
const Employee = require("../models/Employee");

const createTask = async (taskData, assignedBy) => {
  // Check employee exists
  const employee = await Employee.findById(taskData.assignedTo);

  if (!employee) {
    throw new Error("Employee not found.");
  }

  const task = await Task.create({
    title: taskData.title,
    description: taskData.description,
    assignedTo: taskData.assignedTo,
    assignedBy,
    priority: taskData.priority,
    dueDate: taskData.dueDate,
    remarks: taskData.remarks,
  });

  return await task.populate([
    {
      path: "assignedTo",
      select: "employeeId firstName lastName department designation",
    },
    {
      path: "assignedBy",
      select: "email role",
    },
  ]);
};

const getAllTasks = async () => {
  const tasks = await Task.find()
    .populate({
      path: "assignedTo",
      select: "employeeId firstName lastName department designation",
    })
    .populate({
      path: "assignedBy",
      select: "email role",
    })
    .sort({ createdAt: -1 });

  return tasks;
};

const getTaskById = async (id) => {
  const task = await Task.findById(id)
    .populate({
      path: "assignedTo",
      select: "employeeId firstName lastName department designation",
    })
    .populate({
      path: "assignedBy",
      select: "email role",
    });

  if (!task) {
    throw new Error("Task not found.");
  }

  return task;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};