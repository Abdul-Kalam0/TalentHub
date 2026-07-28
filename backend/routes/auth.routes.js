import express from "express";

const router = express.Router();

import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { loginSchema } from "../validation/auth.validation.js";

router.post("/register", register);
router.post("/login", validate(loginSchema), login);
router.post("/logout", authenticate, logout);
router.get("/me", authenticate, getCurrentUser);

export default router;
