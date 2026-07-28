import {
  getRecruiterProfileService,
  updateRecruiterProfileService,
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
  console.log("Controller:", req.body);

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
