import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Fetch My Bookmarks
// ==========================
export const fetchBookmarks = createAsyncThunk(
  "bookmarks/fetchBookmarks",
  async () => {
    const response = await api.get("/bookmarks");
    return response.data.data;
  },
);

// ==========================
// Create Bookmark
// ==========================
export const createBookmark = createAsyncThunk(
  "bookmarks/createBookmark",
  async (jobId) => {
    const response = await api.post(`/jobs/${jobId}/bookmark`);
    return response.data.data;
  },
);

// ==========================
// Delete Bookmark
// ==========================
export const deleteBookmark = createAsyncThunk(
  "bookmarks/deleteBookmark",
  async (bookmarkId) => {
    await api.delete(`/bookmarks/${bookmarkId}`);
    return bookmarkId;
  },
);
