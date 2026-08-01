import { createSlice } from "@reduxjs/toolkit";
import {
  applyForJob,
  fetchMyApplications,
  fetchJobApplications,
  updateApplicationStatus,
  withdrawApplication,
} from "./applicationsThunks";

const initialState = {
  myApplications: [],
  jobApplications: [],

  fetchLoading: false,
  applyLoading: false,
  updateLoading: false,
  withdrawLoading: false,

  error: null,
};

const applicationsSlice = createSlice({
  name: "applications",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Apply For Job
      // ==========================
      .addCase(applyForJob.pending, (state) => {
        state.applyLoading = true;
        state.error = null;
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.applyLoading = false;

        state.myApplications.unshift(action.payload);
      })
      .addCase(applyForJob.rejected, (state, action) => {
        state.applyLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch My Applications
      // ==========================
      .addCase(fetchMyApplications.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchMyApplications.fulfilled, (state, action) => {
        state.fetchLoading = false;

        state.myApplications = action.payload;
      })
      .addCase(fetchMyApplications.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch Job Applications
      // ==========================
      .addCase(fetchJobApplications.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchJobApplications.fulfilled, (state, action) => {
        state.fetchLoading = false;

        state.jobApplications = action.payload;
      })
      .addCase(fetchJobApplications.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Update Application Status
      // ==========================
      .addCase(updateApplicationStatus.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        state.updateLoading = false;

        state.jobApplications = state.jobApplications.map((application) =>
          application._id === action.payload._id ? action.payload : application,
        );
      })
      .addCase(updateApplicationStatus.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Withdraw Application
      // ==========================
      .addCase(withdrawApplication.pending, (state) => {
        state.withdrawLoading = true;
        state.error = null;
      })
      .addCase(withdrawApplication.fulfilled, (state, action) => {
        state.withdrawLoading = false;

        state.myApplications = state.myApplications.filter(
          (application) => application._id !== action.payload,
        );
      })
      .addCase(withdrawApplication.rejected, (state, action) => {
        state.withdrawLoading = false;
        state.error = action.error.message;
      });
  },
});

export default applicationsSlice.reducer;
