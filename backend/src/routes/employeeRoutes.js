const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");

const ROLES = require("../constants/roles");

// Create Employee (Admin Only)
router.post(
  "/",
  authMiddleware,
  authorize(ROLES.ADMIN),
  employeeController.createEmployee
);

module.exports = router;