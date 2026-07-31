import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Fetch Recruiter Profile
// ==========================
export const fetchRecruiterProfile = createAsyncThunk(
  "recruiter/fetchRecruiterProfile",
  async () => {
    const response = await api.get("/recruiters/profile");
    return response.data.data;
  },
);

// ==========================
// Update Recruiter Profile
// ==========================
export const updateRecruiterProfile = createAsyncThunk(
  "recruiter/updateRecruiterProfile",
  async (profileData) => {
    const response = await api.put("/recruiters/profile", profileData);
    return response.data.data;
  },
);

// ==========================
// Upload Company Logo
// ==========================
export const uploadCompanyLogo = createAsyncThunk(
  "recruiter/uploadCompanyLogo",
  async (file) => {
    const formData = new FormData();

    formData.append("companyLogo", file);

    const response = await api.put("/recruiters/company-logo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data;
  },
);
