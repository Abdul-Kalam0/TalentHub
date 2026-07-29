import express from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";
import {
  createBookmark,
  getMyBookmarks,
  deleteBookmark,
} from "../controllers/bookmark.controller.js";

const router = express.Router();

router.post(
  "/jobs/:jobId/bookmark",
  authenticate,
  authorize(ROLES.APPLICANT),
  createBookmark,
);

router.get(
  "/bookmarks",
  authenticate,
  authorize(ROLES.APPLICANT),
  getMyBookmarks,
);

router.delete(
  "/bookmarks/:bookmarkId",
  authenticate,
  authorize(ROLES.APPLICANT),
  deleteBookmark,
);

export default router;
