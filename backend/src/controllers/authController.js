const authService = require("../services/authService");
const ApiResponse = require("../utils/ApiResponse");

const register = async (req, res, next) => {
  try {
    const result = await authService.registerUser(req.body);

    res.status(201).json(
      new ApiResponse(
        true,
        "User registered successfully.",
        result
      )
    );
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await authService.loginUser(
      email,
      password
    );

    res.json(
      new ApiResponse(
        true,
        "Login successful.",
        result
      )
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};