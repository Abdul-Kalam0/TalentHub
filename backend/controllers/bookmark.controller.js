import {
  createBookmarkService,
  getMyBookmarksService,
  deleteBookmarkService,
} from "../services/bookmark.service.js";

// ==========================
// Create Bookmark
// ==========================
export const createBookmark = async (req, res, next) => {
  try {
    const bookmark = await createBookmarkService(
      req.user._id,
      req.params.jobId,
    );

    return res.status(201).json({
      success: true,
      message: "Job bookmarked successfully.",
      data: bookmark,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================
// Get My Bookmarks
// ==========================
export const getMyBookmarks = async (req, res, next) => {
  try {
    const bookmarks = await getMyBookmarksService(req.user._id);

    return res.status(200).json({
      success: true,
      message: "Bookmarks fetched successfully.",
      data: bookmarks,
    });
  } catch (error) {
    next(error);
  }
};

// ==========================
// Delete Bookmark
// ==========================
export const deleteBookmark = async (req, res, next) => {
  try {
    const deletedBookmark = await deleteBookmarkService(
      req.user._id,
      req.params.bookmarkId,
    );

    return res.status(200).json({
      success: true,
      message: "Bookmark removed successfully.",
      data: deletedBookmark,
    });
  } catch (error) {
    next(error);
  }
};
