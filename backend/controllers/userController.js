import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

// @desc    Get User Profile.
// @route   GET /api/users/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// @desc    Register User.
// @route   GET /api/users
// @access  public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User with is Email already exists, Try logging in..");
  }

  const user = User.create({ name, email, password });

  if (user) {
    res.status(101).json({
      _id: user._id,
      name: user.name,
      email: user.password,
      isAdmin: user.isAdmin,
      tokem: generateToken(user._id),
    });
  } else {
    res.status(400); // Bad Request
    throw new Error("Invalid Data");
  }
});

export { authUser, getUserProfile,registerUser };
