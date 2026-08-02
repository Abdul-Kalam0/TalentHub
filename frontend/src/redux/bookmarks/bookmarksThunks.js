import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Fetch My Bookmarks
// ==========================
export const fetchBookmarks = createAsyncThunk(
  "bookmarks/fetchBookmarks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/bookmarks");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bookmarks",
      );
    }
  },
);

// ==========================
// Create Bookmark
// ==========================
export const createBookmark = createAsyncThunk(
  "bookmarks/createBookmark",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await api.post(`/jobs/${jobId}/bookmark`);

      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to bookmark job",
      );
    }
  },
);

// ==========================
// Delete Bookmark
// ==========================
export const deleteBookmark = createAsyncThunk(
  "bookmarks/deleteBookmark",
  async (bookmarkId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/bookmarks/${bookmarkId}`);

      return response.data.data._id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove bookmark",
      );
    }
  },
);
