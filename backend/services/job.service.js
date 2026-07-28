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

export const getAllJobsService = async (query) => {
  const filter = {};

  // Search
  if (query.search) {
    filter.$or = [
      { title: { $regex: query.search, $options: "i" } },
      { description: { $regex: query.search, $options: "i" } },
      {
        skills: {
          $elemMatch: {
            $regex: query.search,
            $options: "i",
          },
        },
      },
    ];
  }

  // Filters
  if (query.location) {
    filter.location = {
      $regex: query.location,
      $options: "i",
    };
  }

  if (query.experience) {
    filter.experience = {
      $regex: query.experience,
      $options: "i",
    };
  }

  if (query.employmentType) {
    filter.employmentType = {
      $regex: query.employmentType,
      $options: "i",
    };
  }

  if (query.workplaceType) {
    filter.workplaceType = {
      $regex: query.workplaceType,
      $options: "i",
    };
  }

  if (query.salary) {
    filter["salary.min"] = {
      $gte: Number(query.salary),
    };
  }

  // Sorting
  let sort = {
    createdAt: -1,
  };

  if (query.sort === "oldest") {
    sort = {
      createdAt: 1,
    };
  }

  if (query.sort === "salary-asc") {
    sort = {
      "salary.min": 1,
    };
  }

  if (query.sort === "salary-desc") {
    sort = {
      "salary.max": -1,
    };
  }

  console.log("Query:", query);
  console.log("Filter:", JSON.stringify(filter, null, 2));

  const allJobs = await JobModel.find(filter)
    .populate({
      path: "recruiter",
      select: "companyName companyLogo",
    })
    .sort(sort);

  return allJobs;
};
