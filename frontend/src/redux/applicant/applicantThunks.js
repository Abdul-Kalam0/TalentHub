import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Fetch Applicant Profile
// ==========================
export const fetchApplicantProfile = createAsyncThunk(
  "applicant/fetchApplicantProfile",
  async () => {
    const response = await api.get("/applicants/profile");

    return response.data.data;
  },
);

// ==========================
// Update Applicant Profile
// ==========================
export const updateApplicantProfile = createAsyncThunk(
  "applicant/updateApplicantProfile",
  async (profileData) => {
    const response = await api.put("/applicants/profile", profileData);

    return response.data.data;
  },
);

// ==========================
// Upload Applicant Photo
// ==========================
export const uploadApplicantPhoto = createAsyncThunk(
  "applicant/uploadApplicantPhoto",
  async (photo) => {
    const formData = new FormData();

    formData.append("photo", photo);

    const response = await api.put("/applicants/me/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data;
  },
);

// ==========================
// Upload Applicant Resume
// ==========================
export const uploadApplicantResume = createAsyncThunk(
  "applicant/uploadApplicantResume",
  async (resume) => {
    const formData = new FormData();

    formData.append("resume", resume);

    const response = await api.put("/applicants/me/resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data;
  },
);
