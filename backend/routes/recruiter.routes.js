import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  getRecruiterProfile,
  updateRecruiterProfile,
} from "../controllers/recruiter.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { updateRecruiterProfileSchema } from "../validation/recruiter.validation.js";

const router = express.Router();

router.get(
  "/recruiters/profile",
  authenticate,
  authorize(ROLES.RECRUITER),
  getRecruiterProfile,
);

router.put(
  "/recruiters/profile",
  validate(updateRecruiterProfileSchema),
  authenticate,
  authorize(ROLES.RECRUITER),
  updateRecruiterProfile,
);

export default router;
