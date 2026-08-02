import ApplicantModel from "../models/Applicant.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

export const getApplicantProfileService = async (userId) => {
  const applicant = await ApplicantModel.findOne({
    user: userId,
  }).populate("user", "fullName email role");

  if (!applicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  return applicant;
};

export const updateApplicantProfileService = async (userId, updateData) => {
  const applicant = await ApplicantModel.findOneAndUpdate(
    { user: userId },
    updateData,
    {
      returnDocument: "after",
      runValidators: true,
    },
  ).populate("user", "fullName email role");

  if (!applicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  return applicant;
};

export const uploadPhotoService = async (userId, file) => {
  const applicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!applicant) {
    const error = new Error("Applicant profile not found");
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
    folder: "talenthub/applicants/photos",
    resource_type: "image",
  });

  applicant.photo = result.secure_url;

  await applicant.save();

  await applicant.populate("user", "fullName email role");

  return applicant;
};

export const uploadResumeService = async (userId, file) => {
  const applicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!applicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const allowedMimeTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    const error = new Error("Only PDF, DOC and DOCX files are allowed");
    error.statusCode = 400;
    throw error;
  }

  const result = await uploadToCloudinary(file.buffer, {
    folder: "talenthub/applicants/resumes",
    resource_type: "raw",
  });

  applicant.resume = result.secure_url;

  await applicant.save();

  await applicant.populate("user", "fullName email role");

  return applicant;
};
