import {
  getCurrentUserService,
  loginUser,
  registerUser,
} from "../services/auth.service.js";

import { ROLES } from "../constants/roles.js";
import {
  applicantRegisterSchema,
  recruiterRegisterSchema,
} from "../validation/auth.validation.js";

export const register = async (req, res, next) => {
  try {
    const { role } = req.body;

    const schema =
      role === ROLES.APPLICANT
        ? applicantRegisterSchema
        : role === ROLES.RECRUITER
          ? recruiterRegisterSchema
          : null;

    if (!schema) {
      return res.status(400).json({
        success: false,
        message: "Invalid role selected.",
      });
    }

    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: error.details.map((err) => err.message),
      });
    }

    const { confirmPassword, ...userData } = value;

    const newUser = await registerUser(userData);

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { loggedInUser, accessToken } = await loginUser(req.body);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: loggedInUser,
    });
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful.",
    });
  } catch (error) {
    next(error);
  }
};
export const getCurrentUser = async (req, res, next) => {
  try {
    const currentUser = await getCurrentUserService(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Current user fetched successfully.",
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};
