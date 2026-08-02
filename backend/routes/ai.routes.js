import express from "express";

import validate from "../middlewares/validate.middleware.js";

import { askHiringAssistantValidation } from "../validation/ai.validation.js";

import { askHiringAssistantController } from "../controllers/ai.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const router = express.Router();

router.post(
  "/jobs/:jobId/ai",
  authenticate,
  validate(askHiringAssistantValidation),
  askHiringAssistantController,
);

export default router;
