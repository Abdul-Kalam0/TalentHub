import { createSlice } from "@reduxjs/toolkit";

import {
  fetchBookmarks,
  createBookmark,
  deleteBookmark,
} from "./bookmarksThunks";

const initialState = {
  bookmarks: [],

  fetchLoading: false,
  createLoading: false,
  deleteLoading: false,

  error: null,
};

const bookmarksSlice = createSlice({
  name: "bookmarks",

  initialState,

  reducers: {
    clearBookmarksError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch Bookmarks
      // ==========================

      .addCase(fetchBookmarks.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })

      .addCase(fetchBookmarks.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.bookmarks = action.payload;
      })

      .addCase(fetchBookmarks.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.payload;
      })

      // ==========================
      // Create Bookmark
      // ==========================

      .addCase(createBookmark.pending, (state) => {
        state.createLoading = true;
        state.error = null;
      })

      .addCase(createBookmark.fulfilled, (state, action) => {
        state.createLoading = false;

        state.bookmarks.unshift(action.payload);
      })

      .addCase(createBookmark.rejected, (state, action) => {
        state.createLoading = false;
        state.error = action.payload;
      })

      // ==========================
      // Delete Bookmark
      // ==========================

      .addCase(deleteBookmark.pending, (state) => {
        state.deleteLoading = true;
        state.error = null;
      })

      .addCase(deleteBookmark.fulfilled, (state, action) => {
        state.deleteLoading = false;

        state.bookmarks = state.bookmarks.filter(
          (bookmark) => bookmark._id !== action.payload,
        );
      })

      .addCase(deleteBookmark.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBookmarksError } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
