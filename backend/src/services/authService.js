const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (data) => {
  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  const user = await User.create(data);

  const token = generateToken(user._id, user.role);

  // Convert Mongoose document to plain object
  const userResponse = user.toObject();

  // Remove password before sending response
  delete userResponse.password;

  return {
    user: userResponse,
    token,
  };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new Error("Invalid credentials.");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid credentials.");
  }

  user.lastLogin = new Date();

  await user.save();

  const token = generateToken(user._id, user.role);

  const userResponse = user.toObject();

  delete userResponse.password;

  return {
    user: userResponse,
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
};