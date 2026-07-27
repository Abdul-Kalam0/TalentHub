import express from "express";

const router = express.Router();

import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validation/auth.validation.js";

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.get("/me", getCurrentUser);

export default router;
