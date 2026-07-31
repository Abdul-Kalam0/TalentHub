import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRecruiterProfile,
  updateRecruiterProfile,
  uploadCompanyLogo,
} from "./recruiterThunks";

const initialState = {
  recruiter: null,
  loading: false,
  error: null,
};

const recruiterSlice = createSlice({
  name: "recruiter",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch Recruiter Profile
      // ==========================
      .addCase(fetchRecruiterProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecruiterProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action.payload;
      })
      .addCase(fetchRecruiterProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Update Recruiter Profile
      // ==========================
      .addCase(updateRecruiterProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRecruiterProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action.payload;
      })
      .addCase(updateRecruiterProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ==========================
      // Upload Company Logo
      // ==========================
      .addCase(uploadCompanyLogo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadCompanyLogo.fulfilled, (state, action) => {
        state.loading = false;
        state.recruiter = action.payload;
      })
      .addCase(uploadCompanyLogo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recruiterSlice.reducer;
