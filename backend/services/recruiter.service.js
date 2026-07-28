import RecruiterModel from "../models/Recruiter.js";

export const getRecruiterProfileService = async (userId) => {
  const recruiterProfile = await RecruiterModel.findOne({
    user: userId,
  }).populate("user", "fullName email role");
  if (!recruiterProfile) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }
  return recruiterProfile;
};
export const updateRecruiterProfileService = async (userId, updateData) => {
  const updatedRecruiterProfile = await RecruiterModel.findOneAndUpdate(
    { user: userId },
    updateData,
    { returnDocument: "after", runValidators: true },
  ).populate("user", "fullName email role");
  if (!updatedRecruiterProfile) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }
  return updatedRecruiterProfile;
};
