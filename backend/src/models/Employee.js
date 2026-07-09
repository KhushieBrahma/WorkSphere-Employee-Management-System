const mongoose = require("mongoose");
const EMPLOYEE_STATUS = require("../constants/employeeStatus");

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true,
      index: true,
      trim: true,
    },

    firstName: {
      type: String,
      required: [true, "First name is required."],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "Last name is required."],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },

    department: {
      type: String,
      required: [true, "Department is required."],
      trim: true,
    },

    designation: {
      type: String,
      required: [true, "Designation is required."],
      trim: true,
    },

    salary: {
      type: Number,
      required: [true, "Salary is required."],
      min: [0, "Salary cannot be negative."],
    },

    joiningDate: {
      type: Date,
      required: [true, "Joining date is required."],
    },

    address: {
      type: String,
      required: [true, "Address is required."],
      trim: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: Object.values(EMPLOYEE_STATUS),
      default: EMPLOYEE_STATUS.ACTIVE,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// -------------------------
// Text Search Index
// -------------------------
employeeSchema.index({
  firstName: "text",
  lastName: "text",
  designation: "text",
  department: "text",
});

module.exports = mongoose.model("Employee", employeeSchema);

