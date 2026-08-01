import ApplicantModel from "../models/Applicant.js";
import ApplicationModel from "../models/Application.js";
import RecruiterModel from "../models/Recruiter.js";
import JobModel from "../models/Job.js";

export const applyForJobService = async (userId, jobId) => {
  const existingApplicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!existingApplicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const existingJob = await JobModel.findById(jobId);

  if (!existingJob) {
    const error = new Error("Job not found");
    error.statusCode = 404;
    throw error;
  }

  if (existingJob.isArchived) {
    const error = new Error("This job is no longer accepting applications");
    error.statusCode = 400;
    throw error;
  }

  if (existingJob.applicationDeadline < new Date()) {
    const error = new Error("The application deadline for this job has passed");
    error.statusCode = 400;
    throw error;
  }

  const existingApplication = await ApplicationModel.findOne({
    applicant: existingApplicant._id,
    job: jobId,
  });

  if (existingApplication) {
    const error = new Error("You have already applied for this job");
    error.statusCode = 409;
    throw error;
  }

  const newApplication = await ApplicationModel.create({
    applicant: existingApplicant._id,
    job: jobId,
  });

  const populatedApplication = await ApplicationModel.findById(
    newApplication._id,
  ).populate({
    path: "job",
    select:
      "title location employmentType workplaceType experience salary applicationDeadline recruiter",
    populate: {
      path: "recruiter",
      select: "companyName companyLogo",
    },
  });

  return populatedApplication;
};

export const getMyApplicationsService = async (userId) => {
  const existingApplicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!existingApplicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const appliedApplications = await ApplicationModel.find({
    applicant: existingApplicant._id,
  })
    .sort({
      createdAt: -1,
    })
    .populate({
      path: "job",
      select:
        "title location employmentType workplaceType experience salary applicationDeadline recruiter",
      populate: {
        path: "recruiter",
        select: "companyName companyLogo",
      },
    });

  return appliedApplications;
};

export const getJobApplicationsService = async (userId, jobId) => {
  const existingRecruiter = await RecruiterModel.findOne({
    user: userId,
  });

  if (!existingRecruiter) {
    const error = new Error("Recruiter profile not found");
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
    const error = new Error(
      "You are not authorized to view these applications",
    );
    error.statusCode = 403;
    throw error;
  }

  const appliedApplications = await ApplicationModel.find({
    job: jobId,
  })
    .sort({
      createdAt: -1,
    })
    .populate({
      path: "applicant",
      select: "skills experience resume",
      populate: {
        path: "user",
        select: "fullName email phone",
      },
    });

  return appliedApplications;
};

export const updateApplicationStatusService = async (
  userId,
  applicationId,
  status,
) => {
  const existingRecruiter = await RecruiterModel.findOne({
    user: userId,
  });

  if (!existingRecruiter) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }

  const existingApplication = await ApplicationModel.findById(applicationId);

  if (!existingApplication) {
    const error = new Error("Application not found");
    error.statusCode = 404;
    throw error;
  }

  const existingJob = await JobModel.findById(existingApplication.job);

  if (!existingJob) {
    const error = new Error("Job not found");
    error.statusCode = 404;
    throw error;
  }

  if (existingJob.recruiter.toString() !== existingRecruiter._id.toString()) {
    const error = new Error(
      "You are not authorized to update this application",
    );
    error.statusCode = 403;
    throw error;
  }

  existingApplication.status = status;

  await existingApplication.save();

  const populatedApplication = await ApplicationModel.findById(
    existingApplication._id,
  ).populate({
    path: "applicant",
    select: "skills experience resume",
    populate: {
      path: "user",
      select: "fullName email",
    },
  });

  return populatedApplication;
};

export const withdrawApplicationService = async (userId, applicationId) => {
  const existingApplicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!existingApplicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const existingApplication = await ApplicationModel.findById(applicationId);

  if (!existingApplication) {
    const error = new Error("Application not found");
    error.statusCode = 404;
    throw error;
  }

  if (
    existingApplication.applicant.toString() !==
    existingApplicant._id.toString()
  ) {
    const error = new Error(
      "You are not authorized to withdraw this application",
    );
    error.statusCode = 403;
    throw error;
  }

  await existingApplication.deleteOne();

  return existingApplication;
};
