const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");

const ROLES = require("../constants/roles");

router.post(
  "/",
  authMiddleware,
  authorize(ROLES.ADMIN, ROLES.MANAGER),
  taskController.createTask
);

module.exports = router;
