import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Apply For Job
// ==========================
export const applyForJob = createAsyncThunk(
  "applications/applyForJob",
  async (jobId) => {
    const response = await api.post(`/jobs/${jobId}/apply`);
    return response.data.data;
  },
);

// ==========================
// Fetch My Applications
// ==========================
export const fetchMyApplications = createAsyncThunk(
  "applications/fetchMyApplications",
  async () => {
    const response = await api.get("/applications/my");
    return response.data.data;
  },
);

// ==========================
// Fetch Job Applications
// ==========================
export const fetchJobApplications = createAsyncThunk(
  "applications/fetchJobApplications",
  async (jobId) => {
    const response = await api.get(`/jobs/${jobId}/applications`);
    return response.data.data;
  },
);

// ==========================
// Update Application Status
// ==========================
export const updateApplicationStatus = createAsyncThunk(
  "applications/updateApplicationStatus",
  async ({ applicationId, status }) => {
    const response = await api.patch(`/applications/${applicationId}/status`, {
      status,
    });

    return response.data.data;
  },
);

// ==========================
// Withdraw Application
// ==========================
export const withdrawApplication = createAsyncThunk(
  "applications/withdrawApplication",
  async (applicationId) => {
    await api.delete(`/applications/${applicationId}`);
    return applicationId;
  },
);
