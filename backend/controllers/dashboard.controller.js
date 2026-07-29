import {
  getApplicantDashboardService,
  getRecruiterDashboardService,
} from "../services/dashboard.service.js";

export const getApplicantDashboard = async (req, res, next) => {
  try {
    const dashboard = await getApplicantDashboardService(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Applicant dashboard fetched successfully",
      data: dashboard,
    });
  } catch (error) {
    next(error);
  }
};

export const getRecruiterDashboard = async (req, res, next) => {
  try {
    const dashboard = await getRecruiterDashboardService(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Recruiter dashboard fetched successfully",
      data: dashboard,
    });
  } catch (error) {
    next(error);
  }
};
