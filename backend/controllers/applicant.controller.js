import {
  getApplicantProfileService,
  updateApplicantProfileService,
  uploadPhotoService,
  uploadResumeService,
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

export const uploadPhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("Photo is required");
      error.statusCode = 400;
      throw error;
    }

    const updatedApplicant = await uploadPhotoService(req.user._id, req.file);

    res.status(200).json({
      success: true,
      message: "Photo uploaded successfully",
      data: updatedApplicant,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("Resume is required");
      error.statusCode = 400;
      throw error;
    }

    const updatedApplicant = await uploadResumeService(req.user._id, req.file);

    res.status(200).json({
      success: true,
      message: "Resume uploaded successfully",
      data: updatedApplicant,
    });
  } catch (error) {
    next(error);
  }
};
