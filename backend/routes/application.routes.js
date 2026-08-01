import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  applyForJob,
  getJobApplications,
  getMyApplications,
  updateApplicationStatus,
  withdrawApplication,
} from "../controllers/application.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { updateApplicationStatusSchema } from "../validation/application.validation.js";

const router = express.Router();

router.post(
  "/jobs/:jobId/apply",
  authenticate,
  authorize(ROLES.APPLICANT),
  applyForJob,
);

router.get(
  "/applications/my",
  authenticate,
  authorize(ROLES.APPLICANT),
  getMyApplications,
);

//Recruiter APIs
router.get(
  "/jobs/:jobId/applications",
  authenticate,
  authorize(ROLES.RECRUITER),
  getJobApplications,
);

router.put(
  "/applications/:applicationId/status",
  authenticate,
  authorize(ROLES.RECRUITER),
  validate(updateApplicationStatusSchema),
  updateApplicationStatus,
);

router.delete(
  "/applications/:applicationId",
  authenticate,
  authorize(ROLES.APPLICANT),
  withdrawApplication,
);

export default router;
