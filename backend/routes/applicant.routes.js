import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  getApplicantProfile,
  updateApplicantProfile,
} from "../controllers/applicant.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { updateApplicantProfileSchema } from "../validation/applicant.validation.js";
const router = express.Router();

router.get(
  "/applicants/profile",
  authenticate,
  authorize(ROLES.APPLICANT),
  getApplicantProfile,
);

router.put(
  "/applicants/profile",
  validate(updateApplicantProfileSchema),
  authenticate,
  authorize(ROLES.APPLICANT),
  updateApplicantProfile,
);

export default router;
