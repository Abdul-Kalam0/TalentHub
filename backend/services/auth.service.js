import bcrypt from "bcrypt";
import UserModel from "../models/User.js";

export const registerUser = async (data) => {
  const { fullName, email, password, role } = data;
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    const error = new Error("User already exists.");
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await UserModel.create({
    fullName,
    email,
    password: hashedPassword,
    role,
  });

  return newUser;
};
export const loginUser = async () => {};

export const logoutUser = async () => {};

export const getCurrentUserService = async () => {};
