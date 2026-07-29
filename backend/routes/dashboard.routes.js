import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  getApplicantDashboard,
  getRecruiterDashboard,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(
  "/dashboard/applicant",
  authenticate,
  authorize(ROLES.APPLICANT),
  getApplicantDashboard,
);

router.get(
  "/dashboard/recruiter",
  authenticate,
  authorize(ROLES.RECRUITER),
  getRecruiterDashboard,
);

export default router;
