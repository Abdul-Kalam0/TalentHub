import {
  getApplicantProfileService,
  updateApplicantProfileService,
  uploadPhotoService,
  uploadResumeService,
} from "../services/applicant.service.js";

export const getApplicantProfile = async (req, res, next) => {
  try {
    const applicant = await getApplicantProfileService(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Applicant profile fetched successfully",
      data: applicant,
    });
  } catch (error) {
    next(error);
  }
};

export const updateApplicantProfile = async (req, res, next) => {
  try {
    const applicant = await updateApplicantProfileService(
      req.user._id,
      req.body,
    );

    return res.status(200).json({
      success: true,
      message: "Applicant profile updated successfully",
      data: applicant,
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

    const applicant = await uploadPhotoService(req.user._id, req.file);

    return res.status(200).json({
      success: true,
      message: "Photo uploaded successfully",
      data: applicant,
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

    const applicant = await uploadResumeService(req.user._id, req.file);

    return res.status(200).json({
      success: true,
      message: "Resume uploaded successfully",
      data: applicant,
    });
  } catch (error) {
    next(error);
  }
};
