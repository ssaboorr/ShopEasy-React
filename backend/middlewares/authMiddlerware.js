// This Middleware will validate the token

import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = User.findOne(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      throw new Error("Not Authorized !!");
    }
  } else {
    throw new Error("No token Found");
  }
});

export { protect };