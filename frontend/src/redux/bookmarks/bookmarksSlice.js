import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBookmarks,
  createBookmark,
  deleteBookmark,
} from "./bookmarksThunks";

const initialState = {
  bookmarks: [],
  loading: false,
  error: null,
};

const bookmarksSlice = createSlice({
  name: "bookmarks",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch Bookmarks
      // ==========================
      .addCase(fetchBookmarks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        state.bookmarks = action.payload;
      })
      .addCase(fetchBookmarks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Create Bookmark
      // ==========================
      .addCase(createBookmark.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBookmark.fulfilled, (state, action) => {
        state.loading = false;
        state.bookmarks.unshift(action.payload);
      })
      .addCase(createBookmark.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Delete Bookmark
      // ==========================
      .addCase(deleteBookmark.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBookmark.fulfilled, (state, action) => {
        state.loading = false;

        state.bookmarks = state.bookmarks.filter(
          (bookmark) => bookmark._id !== action.payload,
        );
      })
      .addCase(deleteBookmark.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookmarksSlice.reducer;
