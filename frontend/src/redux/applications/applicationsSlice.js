import { createSlice } from "@reduxjs/toolkit";
import {
  applyForJob,
  fetchMyApplications,
  fetchJobApplications,
  updateApplicationStatus,
  withdrawApplication,
} from "./applicationsThunks";

const initialState = {
  applications: [],
  loading: false,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.unshift(action.payload);
      })
      .addCase(applyForJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch My Applications
      // ==========================
      .addCase(fetchMyApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(fetchMyApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch Job Applications
      // ==========================
      .addCase(fetchJobApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(fetchJobApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Update Application Status
      // ==========================
      .addCase(updateApplicationStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        state.loading = false;

        state.applications = state.applications.map((application) =>
          application._id === action.payload._id ? action.payload : application,
        );
      })
      .addCase(updateApplicationStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Withdraw Application
      // ==========================
      .addCase(withdrawApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(withdrawApplication.fulfilled, (state, action) => {
        state.loading = false;

        state.applications = state.applications.filter(
          (application) => application._id !== action.payload,
        );
      })
      .addCase(withdrawApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default applicationsSlice.reducer;
