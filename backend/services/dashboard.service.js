import ApplicantModel from "../models/Applicant.js";
import ApplicationModel from "../models/Application.js";
import RecruiterModel from "../models/Recruiter.js";
import JobModel from "../models/Job.js";

export const getApplicantDashboardService = async (userId) => {
  const existingApplicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!existingApplicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const totalApplications = await ApplicationModel.countDocuments({
    applicant: existingApplicant._id,
  });

  const applied = await ApplicationModel.countDocuments({
    applicant: existingApplicant._id,
    status: "Applied",
  });

  const reviewed = await ApplicationModel.countDocuments({
    applicant: existingApplicant._id,
    status: "Reviewed",
  });

  const shortlisted = await ApplicationModel.countDocuments({
    applicant: existingApplicant._id,
    status: "Shortlisted",
  });

  const rejected = await ApplicationModel.countDocuments({
    applicant: existingApplicant._id,
    status: "Rejected",
  });

  const hired = await ApplicationModel.countDocuments({
    applicant: existingApplicant._id,
    status: "Hired",
  });

  return {
    totalApplications,
    applied,
    reviewed,
    shortlisted,
    rejected,
    hired,
  };
};

export const getRecruiterDashboardService = async (userId) => {
  const existingRecruiter = await RecruiterModel.findOne({
    user: userId,
  });

  if (!existingRecruiter) {
    const error = new Error("Recruiter profile not found");
    error.statusCode = 404;
    throw error;
  }

  const recruiterJobs = await JobModel.find({
    recruiter: existingRecruiter._id,
  }).select("_id isArchived");

  const jobIds = recruiterJobs.map((job) => job._id);

  const activeJobs = recruiterJobs.filter((job) => !job.isArchived).length;

  const archivedJobs = recruiterJobs.filter((job) => job.isArchived).length;

  const totalApplications = await ApplicationModel.countDocuments({
    job: { $in: jobIds },
  });

  const applied = await ApplicationModel.countDocuments({
    job: { $in: jobIds },
    status: "Applied",
  });

  const reviewed = await ApplicationModel.countDocuments({
    job: { $in: jobIds },
    status: "Reviewed",
  });

  const shortlisted = await ApplicationModel.countDocuments({
    job: { $in: jobIds },
    status: "Shortlisted",
  });

  const rejected = await ApplicationModel.countDocuments({
    job: { $in: jobIds },
    status: "Rejected",
  });

  const hired = await ApplicationModel.countDocuments({
    job: { $in: jobIds },
    status: "Hired",
  });

  const recentApplications = await ApplicationModel.find({
    job: { $in: jobIds },
  })
    .populate({
      path: "applicant",
      select: "photo resume skills experience",
      populate: {
        path: "user",
        select: "fullName email",
      },
    })
    .populate({
      path: "job",
      select: "title",
    })
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    activeJobs,
    archivedJobs,
    totalApplications,
    applied,
    reviewed,
    shortlisted,
    rejected,
    hired,
    recentApplications,
  };
};
