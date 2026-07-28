import {
  getApplicantProfileService,
  updateApplicantProfileService,
} from "../services/applicant.service.js";

export const getApplicantProfile = async (req, res, next) => {
  try {
    const applicantProfile = await getApplicantProfileService(req.user._id);
    return res.status(200).json({
      success: true,
      message: "Applicant profile fetched successfully",
      data: applicantProfile,
    });
  } catch (error) {
    next(error);
  }
};

export const updateApplicantProfile = async (req, res, next) => {
  try {
    const updatedApplicantProfile = await updateApplicantProfileService(
      req.user._id,
      req.body,
    );
    return res.status(200).json({
      success: true,
      message: "Applicant profile updated successfully",
      data: updatedApplicantProfile,
    });
  } catch (error) {
    next(error);
  }
};
