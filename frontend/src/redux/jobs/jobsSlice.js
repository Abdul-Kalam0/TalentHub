import { createSlice } from "@reduxjs/toolkit";
import {
  fetchJobs,
  fetchMyJobs,
  fetchJobById,
  fetchSimilarJobs,
  createJob,
  updateJob,
  archiveJob,
  deleteJob,
} from "./jobsThunks";

const initialState = {
  jobs: [],
  selectedJob: null,

  fetchLoading: false,
  createLoading: false,
  updateLoading: false,
  archiveLoading: false,
  deleteLoading: false,

  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch All Jobs
      // ==========================
      .addCase(fetchJobs.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch Recruiter's Jobs
      // ==========================
      .addCase(fetchMyJobs.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchMyJobs.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchMyJobs.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch Job By Id
      // ==========================
      .addCase(fetchJobById.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.selectedJob = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch Similar Jobs
      // ==========================
      .addCase(fetchSimilarJobs.pending, (state) => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchSimilarJobs.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchSimilarJobs.rejected, (state, action) => {
        state.fetchLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Create Job
      // ==========================
      .addCase(createJob.pending, (state) => {
        state.createLoading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.createLoading = false;
        state.jobs.unshift(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.createLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Update Job
      // ==========================
      .addCase(updateJob.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.updateLoading = false;

        state.jobs = state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job,
        );

        if (state.selectedJob?._id === action.payload._id) {
          state.selectedJob = action.payload;
        }
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Archive Job
      // ==========================
      .addCase(archiveJob.pending, (state) => {
        state.archiveLoading = true;
        state.error = null;
      })
      .addCase(archiveJob.fulfilled, (state, action) => {
        state.archiveLoading = false;

        state.jobs = state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job,
        );

        if (state.selectedJob?._id === action.payload._id) {
          state.selectedJob = action.payload;
        }
      })
      .addCase(archiveJob.rejected, (state, action) => {
        state.archiveLoading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Delete Job
      // ==========================
      .addCase(deleteJob.pending, (state) => {
        state.deleteLoading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.deleteLoading = false;

        state.jobs = state.jobs.filter((job) => job._id !== action.payload);

        if (state.selectedJob?._id === action.payload) {
          state.selectedJob = null;
        }
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
