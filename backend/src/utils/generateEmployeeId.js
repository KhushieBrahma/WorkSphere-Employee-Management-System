const Employee = require("../models/Employee");

const generateEmployeeId = async () => {
  const count = await Employee.countDocuments();

  return `EMP${String(count + 1).padStart(4, "0")}`;
};

module.exports = generateEmployeeId;