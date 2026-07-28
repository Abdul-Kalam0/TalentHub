import {
  createJobService,
  deleteJobService,
  getAllJobsService,
  getJobByIdService,
  getMyJobsService,
  updateJobService,
} from "../services/job.service.js";

export const createJob = async (req, res, next) => {
  try {
    const newJob = await createJobService(req.user._id, req.body);
    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: newJob,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyJobs = async (req, res, next) => {
  try {
    const allMyJobs = await getMyJobsService(req.user._id);
    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfuly",
      data: allMyJobs,
    });
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (req, res, next) => {
  try {
    const job = await getJobByIdService(req.params.jobId);
    return res.status(200).json({
      success: true,
      message: "Job fetched successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const updatedJob = await updateJobService(
      req.user._id,
      req.params.jobId,
      req.body,
    );

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: updatedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const deletedJob = await deleteJobService(req.user._id, req.params.jobId);

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      data: deletedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllJobs = async (req, res, next) => {
  try {
    const allJobs = await getAllJobsService();

    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: allJobs,
    });
  } catch (error) {
    next(error);
  }
};
