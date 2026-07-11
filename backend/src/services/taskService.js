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

module.exports = {
  createTask,
};