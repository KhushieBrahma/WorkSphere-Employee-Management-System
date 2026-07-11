const mongoose = require("mongoose");

const User = require("../models/User");
const Employee = require("../models/Employee");

const generateEmployeeId = require("../utils/generateEmployeeId");

const createEmployee = async (employeeData) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    // Check existing email
    const existingUser = await User.findOne({
      email: employeeData.email,
    }).session(session);

    if (existingUser) {
      throw new Error("Email already exists.");
    }

    // Create user
    const user = await User.create(
      [
        {
          email: employeeData.email,
          password: employeeData.password,
          role: employeeData.role,
        },
      ],
      { session }
    );

    // Generate employee ID
    const employeeId = await generateEmployeeId();

    // Create employee profile
    const employee = await Employee.create(
      [
        {
          employeeId,

          firstName: employeeData.firstName,

          lastName: employeeData.lastName,

          phone: employeeData.phone,

          department: employeeData.department,

          designation: employeeData.designation,

          salary: employeeData.salary,

          joiningDate: employeeData.joiningDate,

          address: employeeData.address,

          user: user[0]._id,
        },
      ],
      { session }
    );

    await session.commitTransaction();

    session.endSession();

    return employee[0];
  } catch (error) {
    await session.abortTransaction();

    session.endSession();

    throw error;
  }
};


const getAllEmployees = async () => {
  const employees = await Employee.find()
    .populate("user", "-password")
    .sort({ createdAt: -1 });

  return employees;
};

const getEmployeeById = async (id) => {
  const employee = await Employee.findById(id)
    .populate("user", "-password");

  if (!employee) {
    throw new Error("Employee not found.");
  }

  return employee;
};

const updateEmployee = async (id, data) => {
  const employee = await Employee.findById(id);

  if (!employee) {
    throw new Error("Employee not found.");
  }

  Object.assign(employee, data);

  await employee.save();

  return employee.populate("user", "-password");
};

const EMPLOYEE_STATUS = require("../constants/employeeStatus");

const deleteEmployee = async (id) => {
  const employee = await Employee.findById(id);

  if (!employee) {
    throw new Error("Employee not found.");
  }

  employee.status = EMPLOYEE_STATUS.INACTIVE;

  await employee.save();

  return employee;
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};