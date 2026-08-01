import { createSlice } from "@reduxjs/toolkit";

import {
  fetchApplicantProfile,
  updateApplicantProfile,
  uploadApplicantPhoto,
  uploadApplicantResume,
} from "./applicantThunks";

const initialState = {
  profile: null,

  fetchLoading: false,
  updateLoading: false,
  photoLoading: false,
  resumeLoading: false,

  error: null,
};

const applicantSlice = createSlice({
  name: "applicant",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch Applicant Profile
      // ==========================
      .addCase(fetchApplicantProfile.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })

      .addCase(fetchApplicantProfile.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.profile = action.payload;
      })

      .addCase(fetchApplicantProfile.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Update Applicant Profile
      // ==========================
      .addCase(updateApplicantProfile.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })

      .addCase(updateApplicantProfile.fulfilled, (state, action) => {
        state.updateLoading = false;
        state.profile = action.payload;
      })

      .addCase(updateApplicantProfile.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Upload Applicant Photo
      // ==========================
      .addCase(uploadApplicantPhoto.pending, (state) => {
        state.photoLoading = true;
        state.error = null;
      })

      .addCase(uploadApplicantPhoto.fulfilled, (state, action) => {
        state.photoLoading = false;
        state.profile = action.payload;
      })

      .addCase(uploadApplicantPhoto.rejected, (state, action) => {
        state.photoLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Upload Applicant Resume
      // ==========================
      .addCase(uploadApplicantResume.pending, (state) => {
        state.resumeLoading = true;
        state.error = null;
      })

      .addCase(uploadApplicantResume.fulfilled, (state, action) => {
        state.resumeLoading = false;
        state.profile = action.payload;
      })

      .addCase(uploadApplicantResume.rejected, (state, action) => {
        state.resumeLoading = false;
        state.error = action.error.message;
      });
  },
});

export default applicantSlice.reducer;
