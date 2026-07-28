import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import ApplicantModel from "../models/Applicant.js";
import RecruiterModel from "../models/Recruiter.js";

import { ROLES } from "../constants/roles.js";

export const registerUser = async (data) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const existingUser = await UserModel.findOne({
      email: data.email,
    }).session(session);

    if (existingUser) {
      const error = new Error("User already exists.");
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const [newUser] = await UserModel.create(
      [
        {
          fullName: data.fullName,
          email: data.email,
          password: hashedPassword,
          role: data.role,
        },
      ],
      { session },
    );

    if (data.role === ROLES.APPLICANT) {
      await ApplicantModel.create(
        [
          {
            user: newUser._id,
            experience: data.experience,
            currentLocation: data.currentLocation,
            skills: data.skills,
            resume: data.resume,
            bio: data.bio,
            education: data.education,
          },
        ],
        { session },
      );
    } else if (data.role === ROLES.RECRUITER) {
      await RecruiterModel.create(
        [
          {
            user: newUser._id,
            companyName: data.companyName,
            companySize: data.companySize,
            website: data.website,
            aboutCompany: data.aboutCompany,
          },
        ],
        { session },
      );
    }

    await session.commitTransaction();

    const userResponse = newUser.toObject();
    delete userResponse.password;

    return userResponse;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

export const loginUser = async (data) => {
  const existingUser = await UserModel.findOne({
    email: data.email,
  }).select("+password");

  if (!existingUser) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    throw error;
  }

  const isPasswordMatched = await bcrypt.compare(
    data.password,
    existingUser.password,
  );

  if (!isPasswordMatched) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    throw error;
  }

  if (!existingUser.isActive) {
    const error = new Error("Your account has been deactivated.");
    error.statusCode = 403;
    throw error;
  }

  const accessToken = jwt.sign(
    {
      id: existingUser._id,
      role: existingUser.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const loggedInUser = existingUser.toObject();
  delete loggedInUser.password;

  return {
    loggedInUser,
    accessToken,
  };
};

export const getCurrentUserService = async (userId) => {
  const existingUser = await UserModel.findById(userId);

  if (!existingUser) {
    const error = new Error("User not found.");
    error.statusCode = 404;
    throw error;
  }

  return existingUser;
};
