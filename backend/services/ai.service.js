import mongoose from "mongoose";

import RecruiterModel from "../models/Recruiter.js";
import JobModel from "../models/Job.js";
import ApplicationModel from "../models/Application.js";

import { buildApplicantContext } from "../utils/buildApplicantContext.js";
import { generateHiringAssistantResponse } from "./groq.service.js";

export const askHiringAssistantService = async (
  recruiterUserId,
  jobId,
  prompt,
) => {
  // Validate Job ID

  if (!mongoose.Types.ObjectId.isValid(jobId)) {
    const error = new Error("Invalid job ID.");
    error.statusCode = 400;
    throw error;
  }

  // Verify Recruiter

  const recruiter = await RecruiterModel.findOne({
    user: recruiterUserId,
  });

  if (!recruiter) {
    const error = new Error("Recruiter profile not found.");
    error.statusCode = 404;
    throw error;
  }

  // Verify Job

  const job = await JobModel.findById(jobId);

  if (!job) {
    const error = new Error("Job not found.");
    error.statusCode = 404;
    throw error;
  }

  // Verify Job Ownership

  if (job.recruiter.toString() !== recruiter._id.toString()) {
    const error = new Error("You are not authorized to access this job.");

    error.statusCode = 403;

    throw error;
  }

  // Fetch Applications

  const applications = await ApplicationModel.find({
    job: jobId,
  })
    .populate({
      path: "applicant",
      select: "skills experience resume",
      populate: {
        path: "user",
        select: "fullName email",
      },
    })
    .sort({
      createdAt: -1,
    });

  if (applications.length === 0) {
    const error = new Error("No applicants found for this job.");
    error.statusCode = 404;
    throw error;
  }

  // Build AI Context

  const applicantContext = buildApplicantContext(job, applications);

  // Generate AI Response

  const answer = await generateHiringAssistantResponse(
    prompt,
    applicantContext,
  );

  return {
    answer,
    totalApplicants: applications.length,
  };
};
