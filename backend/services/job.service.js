import JobModel from "../models/Job.js";
import RecruiterModel from "../models/Recruiter.js";

export const createJobService = async (userId, jobData) => {
  const existingRecruiter = await RecruiterModel.findOne({ user: userId });
  if (!existingRecruiter) {
    const error = new Error("Recruiter not found");
    error.statusCode = 404;
    throw error;
  }
  const newJob = await JobModel.create({
    recruiter: existingRecruiter._id,
    ...jobData,
  });
  return newJob;
};

export const getMyJobsService = async (userId) => {
  const existingRecruiter = await RecruiterModel.findOne({ user: userId });
  if (!existingRecruiter) {
    const error = new Error("Recruiter not found");
    error.statusCode = 404;
    throw error;
  }
  const allMyJobs = await JobModel.find({
    recruiter: existingRecruiter._id,
  }).sort({ createdAt: -1 });
  return allMyJobs;
};

export const getJobByIdService = async (jobId) => {
  const existingJob = await JobModel.findById(jobId).populate({
    path: "recruiter",
    populate: {
      path: "user",
      select: "fullName email",
    },
  });

  if (!existingJob) {
    const error = new Error("Job not found");
    error.statusCode = 404;
    throw error;
  }

  return existingJob;
};

export const updateJobService = async (userId, jobId, updateData) => {
  const existingRecruiter = await RecruiterModel.findOne({
    user: userId,
  });

  if (!existingRecruiter) {
    const error = new Error("Recruiter not found");
    error.statusCode = 404;
    throw error;
  }

  const existingJob = await JobModel.findById(jobId);

  if (!existingJob) {
    const error = new Error("Job not found");
    error.statusCode = 404;
    throw error;
  }

  if (existingJob.recruiter.toString() !== existingRecruiter._id.toString()) {
    const error = new Error("You are not authorized to update this job");
    error.statusCode = 403;
    throw error;
  }

  const updatedJob = await JobModel.findByIdAndUpdate(jobId, updateData, {
    returnDocument: "after",
    runValidators: true,
  });

  return updatedJob;
};

export const deleteJobService = async (userId, jobId) => {
  const existingRecruiter = await RecruiterModel.findOne({
    user: userId,
  });

  if (!existingRecruiter) {
    const error = new Error("Recruiter not found");
    error.statusCode = 404;
    throw error;
  }

  const existingJob = await JobModel.findById(jobId);

  if (!existingJob) {
    const error = new Error("Job not found");
    error.statusCode = 404;
    throw error;
  }

  if (existingJob.recruiter.toString() !== existingRecruiter._id.toString()) {
    const error = new Error("You are not authorized to delete this job");
    error.statusCode = 403;
    throw error;
  }

  const deletedJob = await JobModel.findByIdAndDelete(jobId);

  return deletedJob;
};

export const getAllJobsService = async () => {
  const allJobs = await JobModel.find()
    .populate({
      path: "recruiter",
      select: "companyName companyLogo",
    })
    .sort({
      createdAt: -1,
    });

  return allJobs;
};
