const employeeService = require("../services/employeeService");

const ApiResponse = require("../utils/ApiResponse");

const createEmployee = async (req, res, next) => {
  try {
    const employee =
      await employeeService.createEmployee(req.body);

    res.status(201).json(
      new ApiResponse(
        true,
        "Employee created successfully.",
        employee
      )
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEmployee,
};