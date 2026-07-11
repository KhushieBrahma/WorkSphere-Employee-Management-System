const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");

const ROLES = require("../constants/roles");

router.get(
  "/",
  authMiddleware,
  authorize(ROLES.ADMIN, ROLES.MANAGER),
  employeeController.getAllEmployees
);

router.get(
  "/:id",
  authMiddleware,
  authorize(ROLES.ADMIN, ROLES.MANAGER),
  employeeController.getEmployeeById
);

// Create Employee (Admin Only)
router.post(
  "/",
  authMiddleware,
  authorize(ROLES.ADMIN),
  employeeController.createEmployee
);

router.put(
  "/:id",
  authMiddleware,
  authorize(ROLES.ADMIN),
  employeeController.updateEmployee
);

module.exports = router;