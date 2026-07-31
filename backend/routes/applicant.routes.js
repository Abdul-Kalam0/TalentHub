import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  getApplicantProfile,
  updateApplicantProfile,
  uploadPhoto,
  uploadResume,
} from "../controllers/applicant.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { updateApplicantProfileSchema } from "../validation/applicant.validation.js";
import upload from "../middlewares/upload.middleware.js";
const router = express.Router();

//Applicant APIs
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

router.put(
  "/applicants/me/photo",
  authenticate,
  upload.single("photo"),
  uploadPhoto,
);

router.put(
  "/applicants/me/resume",
  authenticate,
  upload.single("resume"),
  uploadResume,
);

export default router;
