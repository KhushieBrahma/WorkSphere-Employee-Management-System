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

module.exports = {
  createTask,
};