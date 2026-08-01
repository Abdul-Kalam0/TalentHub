import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

export const authenticate = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      const error = new Error("Authentication required.");
      error.statusCode = 401;
      throw error;
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    const existingUser = await UserModel.findById(decoded.id);

    if (!existingUser) {
      const error = new Error("User not found.");
      error.statusCode = 404;
      throw error;
    }

    if (!existingUser.isActive) {
      const error = new Error("Your account has been deactivated.");
      error.statusCode = 403;
      throw error;
    }

    req.user = existingUser;
    next();
  } catch (error) {
    next(error);
  }
};
