import {
  getCurrentUserService,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/auth.service.js";

export const register = async (req, res, next) => {
  try {
    const newUser = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const register = await loginUser(req.body);
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res, next) => {
  try {
    const register = await logoutUser(req.user);
  } catch (error) {
    next(error);
  }
};
export const getCurrentUser = async (req, res, next) => {
  try {
    const register = await getCurrentUserService(req.user);
  } catch (error) {
    next(error);
  }
};
