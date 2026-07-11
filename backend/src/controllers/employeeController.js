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


const getAllEmployees = async (req, res, next) => {
  try {
    const employees =
      await employeeService.getAllEmployees();

    res.status(200).json(
      new ApiResponse(
        true,
        "Employees fetched successfully.",
        employees
      )
    );
  } catch (error) {
    next(error);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const employee =
      await employeeService.getEmployeeById(req.params.id);

    res.status(200).json(
      new ApiResponse(
        true,
        "Employee fetched successfully.",
        employee
      )
    );
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const employee =
      await employeeService.updateEmployee(
        req.params.id,
        req.body
      );

    res.status(200).json(
      new ApiResponse(
        true,
        "Employee updated successfully.",
        employee
      )
    );
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.deleteEmployee(
      req.params.id
    );

    res.status(200).json(
      new ApiResponse(
        true,
        "Employee deactivated successfully.",
        employee
      )
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};