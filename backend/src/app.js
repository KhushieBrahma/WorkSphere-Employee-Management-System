const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// -----------------------------
// Global Middleware
// -----------------------------
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// -----------------------------
// Health Check Route
// -----------------------------
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    project: "WorkSphere Employee Management System",
    version: "1.0.0",
    message: "Backend API is running successfully 🚀",
  });
});

module.exports = app;