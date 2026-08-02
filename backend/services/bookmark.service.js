import ApplicantModel from "../models/Applicant.js";
import ApplicationModel from "../models/Application.js";
import BookmarkModel from "../models/Bookmark.js";
import JobModel from "../models/Job.js";

// ==========================
// Create Bookmark
// ==========================
export const createBookmarkService = async (userId, jobId) => {
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

  const existingBookmark = await BookmarkModel.findOne({
    applicant: existingApplicant._id,
    job: jobId,
  });

  if (existingBookmark) {
    const error = new Error("Job is already bookmarked");
    error.statusCode = 409;
    throw error;
  }

  const newBookmark = await BookmarkModel.create({
    applicant: existingApplicant._id,
    job: jobId,
  });

  const populatedBookmark = await BookmarkModel.findById(
    newBookmark._id,
  ).populate({
    path: "job",
    select: `
      title
      description
      location
      employmentType
      workplaceType
      experience
      salary
      skills
      createdAt
      recruiter
    `,
    populate: {
      path: "recruiter",
      select: `
        companyName
        companyLogo
        companyLocation
      `,
    },
  });

  const existingApplication = await ApplicationModel.findOne({
    applicant: existingApplicant._id,
    job: jobId,
  });

  return {
    ...populatedBookmark.toObject(),
    isApplied: !!existingApplication,
  };
};

// ==========================
// Get My Bookmarks
// ==========================
export const getMyBookmarksService = async (userId) => {
  const existingApplicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!existingApplicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const bookmarks = await BookmarkModel.find({
    applicant: existingApplicant._id,
  })
    .sort({ createdAt: -1 })
    .populate({
      path: "job",
      select: `
        title
        description
        location
        employmentType
        workplaceType
        experience
        salary
        skills
        createdAt
        recruiter
      `,
      populate: {
        path: "recruiter",
        select: `
          companyName
          companyLogo
          companyLocation
        `,
      },
    });

  const validBookmarks = bookmarks.filter((bookmark) => bookmark.job);

  const applications = await ApplicationModel.find({
    applicant: existingApplicant._id,
  }).select("job");

  const appliedJobIds = new Set(
    applications.map((application) => application.job.toString()),
  );

  return validBookmarks.map((bookmark) => ({
    ...bookmark.toObject(),
    isApplied: appliedJobIds.has(bookmark.job._id.toString()),
  }));
};

// ==========================
// Delete Bookmark
// ==========================
export const deleteBookmarkService = async (userId, bookmarkId) => {
  const existingApplicant = await ApplicantModel.findOne({
    user: userId,
  });

  if (!existingApplicant) {
    const error = new Error("Applicant profile not found");
    error.statusCode = 404;
    throw error;
  }

  const existingBookmark = await BookmarkModel.findById(bookmarkId);

  if (!existingBookmark) {
    const error = new Error("Bookmark not found");
    error.statusCode = 404;
    throw error;
  }

  if (
    existingBookmark.applicant.toString() !== existingApplicant._id.toString()
  ) {
    const error = new Error("You are not authorized to remove this bookmark");
    error.statusCode = 403;
    throw error;
  }

  await existingBookmark.deleteOne();

  return {
    _id: bookmarkId,
  };
};
