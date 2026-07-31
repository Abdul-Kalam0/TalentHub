import express from "express";
import validate from "../middlewares/validate.middleware.js";
import {
  createJobSchema,
  updateJobSchema,
} from "../validation/job.validation.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  archiveJob,
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  getMyJobs,
  getSimilarJobs,
  updateJob,
} from "../controllers/job.controller.js";
const router = express.Router();

//Recruiter routes
router.post(
  "/jobs",
  validate(createJobSchema),
  authenticate,
  authorize(ROLES.RECRUITER),
  createJob,
);

router.get("/jobs/my", authenticate, authorize(ROLES.RECRUITER), getMyJobs);

router.put(
  "/jobs/:jobId",
  validate(updateJobSchema),
  authenticate,
  authorize(ROLES.RECRUITER),
  updateJob,
);

router.delete(
  "/jobs/:jobId",
  authenticate,
  authorize(ROLES.RECRUITER),
  deleteJob,
);
router.put(
  "/jobs/:jobId/archive",
  authenticate,
  authorize(ROLES.RECRUITER),
  archiveJob,
);

router.get("/jobs/:jobId/similar", getSimilarJobs);

// Shared Routes (Recruiter + Applicant)
router.get("/jobs/:jobId", authenticate, getJobById);

router.get("/jobs", authenticate, getAllJobs);

export default router;
