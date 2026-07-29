import {
  applyForJobService,
  getJobApplicationsService,
  getMyApplicationsService,
  updateApplicationStatusService,
  withdrawApplicationService,
} from "../services/application.service.js";

export const applyForJob = async (req, res, next) => {
  try {
    const appliedJob = await applyForJobService(req.user._id, req.params.jobId);
    return res.status(201).json({
      success: true,
      message: "Applied to the job successfully",
      data: appliedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyApplications = async (req, res, next) => {
  try {
    const appliedJobs = await getMyApplicationsService(req.user._id);
    return res.status(200).json({
      success: true,
      message: "Applications fetched successfully",
      data: appliedJobs,
    });
  } catch (error) {
    next(error);
  }
};

export const getJobApplications = async (req, res, next) => {
  try {
    const applications = await getJobApplicationsService(
      req.user._id,
      req.params.jobId,
    );

    return res.status(200).json({
      success: true,
      message: "Applications fetched successfully",
      data: applications,
    });
  } catch (error) {
    next(error);
  }
};

export const updateApplicationStatus = async (req, res, next) => {
  try {
    const updatedApplication = await updateApplicationStatusService(
      req.user._id,
      req.params.applicationId,
      req.body.status,
    );

    return res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: updatedApplication,
    });
  } catch (error) {
    next(error);
  }
};

export const withdrawApplication = async (req, res, next) => {
  try {
    const deletedApplication = await withdrawApplicationService(
      req.user._id,
      req.params.applicationId,
    );

    return res.status(200).json({
      success: true,
      message: "Application withdrawn successfully",
      data: deletedApplication,
    });
  } catch (error) {
    next(error);
  }
};
