import ApplicantModel from "../models/Applicant.js";

export const getApplicantProfileService = async (userId) => {
  const applicantProfile = await ApplicantModel.findOne({
    user: userId,
  }).populate("user", "fullName email role");
  if (!applicantProfile) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }
  return applicantProfile;
};
export const updateApplicantProfileService = async (userId, updateData) => {
  const updatedApplicantProfile = await ApplicantModel.findOneAndUpdate(
    { user: userId },
    updateData,
    { returnDocument: "after", runValidators: true },
  ).populate("user", "fullName email role");
  if (!updatedApplicantProfile) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }
  return updatedApplicantProfile;
};
