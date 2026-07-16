const taskService = require("../services/taskService");
const ApiResponse = require("../utils/ApiResponse");

const createTask = async (req, res, next) => {
  try {
    const task = await taskService.createTask(
      req.body,
      req.user.id
    );

    res.status(201).json(
      new ApiResponse(
        true,
        "Task assigned successfully.",
        task
      )
    );
  } catch (error) {
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();

    res.status(200).json(
      new ApiResponse(
        true,
        "Tasks fetched successfully.",
        tasks
      )
    );
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id);

    res.status(200).json(
      new ApiResponse(
        true,
        "Task fetched successfully.",
        task
      )
    );
  } catch (error) {
    next(error);
  }
};

const updateTaskStatus = async (req, res, next) => {
  try {
    const task =
      await taskService.updateTaskStatus(
        req.params.id,
        req.body.status
      );

    res.status(200).json(
      new ApiResponse(
        true,
        "Task status updated successfully.",
        task
      )
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskStatus,
};