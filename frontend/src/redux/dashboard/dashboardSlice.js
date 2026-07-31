import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRecruiterDashboard,
  fetchApplicantDashboard,
} from "./dashboardThunks";

const initialState = {
  dashboard: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch Recruiter Dashboard
      // ==========================
      .addCase(fetchRecruiterDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecruiterDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboard = action.payload;
      })
      .addCase(fetchRecruiterDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Fetch Applicant Dashboard
      // ==========================
      .addCase(fetchApplicantDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicantDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboard = action.payload;
      })
      .addCase(fetchApplicantDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
