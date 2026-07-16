const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");

const ROLES = require("../constants/roles");

router.get(
  "/",
  authMiddleware,
  authorize(ROLES.ADMIN, ROLES.MANAGER),
  taskController.getAllTasks
);

router.get(
  "/:id",
  authMiddleware,
  authorize(ROLES.ADMIN, ROLES.MANAGER),
  taskController.getTaskById
);

router.post(
  "/",
  authMiddleware,
  authorize(ROLES.ADMIN, ROLES.MANAGER),
  taskController.createTask
);

router.patch(
  "/:id/status",
  authMiddleware,
  authorize(
    ROLES.ADMIN,
    ROLES.MANAGER,
    ROLES.EMPLOYEE
  ),
  taskController.updateTaskStatus
);

module.exports = router;
