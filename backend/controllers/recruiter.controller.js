import {
  getRecruiterProfileService,
  updateRecruiterProfileService,
  uploadCompanyLogoService,
} from "../services/recruiter.service.js";

export const getRecruiterProfile = async (req, res, next) => {
  try {
    const recruiterProfile = await getRecruiterProfileService(req.user._id);

    return res.status(200).json({
      success: true,
      data: recruiterProfile,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRecruiterProfile = async (req, res, next) => {
  try {
    const updatedRecruiterProfile = await updateRecruiterProfileService(
      req.user._id,
      req.body,
    );

    return res.status(200).json({
      success: true,
      message: "Recruiter profile updated successfully.",
      data: updatedRecruiterProfile,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadCompanyLogo = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("Company logo is required.");
      error.statusCode = 400;
      throw error;
    }

    const recruiter = await uploadCompanyLogoService(req.user._id, req.file);

    return res.status(200).json({
      success: true,
      message: "Company logo uploaded successfully.",
      data: recruiter,
    });
  } catch (error) {
    next(error);
  }
};
