import RecruiterModel from "../models/Recruiter.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

export const getRecruiterProfileService = async (userId) => {
  const recruiter = await RecruiterModel.findOne({
    user: userId,
  }).populate("user", "fullName email role");

  if (!recruiter) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }

  return recruiter;
};

export const updateRecruiterProfileService = async (userId, updateData) => {
  const recruiter = await RecruiterModel.findOneAndUpdate(
    { user: userId },
    updateData,
    {
      returnDocument: "after",
      runValidators: true,
    },
  ).populate("user", "fullName email role");

  if (!recruiter) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }

  return recruiter;
};

export const uploadCompanyLogoService = async (userId, file) => {
  const recruiter = await RecruiterModel.findOne({
    user: userId,
  });

  if (!recruiter) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }

  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    const error = new Error("Only JPEG, PNG and WEBP images are allowed");
    error.statusCode = 400;
    throw error;
  }

  const result = await uploadToCloudinary(file.buffer, {
    folder: "talenthub/recruiters/company-logo",
    resource_type: "image",
  });

  recruiter.companyLogo = result.secure_url;

  await recruiter.save();

  const updatedRecruiter = await RecruiterModel.findById(
    recruiter._id,
  ).populate("user", "fullName email role");

  return updatedRecruiter;
};
