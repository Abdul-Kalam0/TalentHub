import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Fetch All Jobs
// ==========================
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await api.get("/jobs");
  return response.data.data;
});

// ==========================
// Fetch Recruiter's Jobs
// ==========================
export const fetchMyJobs = createAsyncThunk("jobs/fetchMyJobs", async () => {
  const response = await api.get("/jobs/my");
  return response.data.data;
});

// ==========================
// Fetch Job By Id
// ==========================
export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId) => {
    const response = await api.get(`/jobs/${jobId}`);
    return response.data.data;
  },
);

// ==========================
// Fetch Similar Jobs
// ==========================
export const fetchSimilarJobs = createAsyncThunk(
  "jobs/fetchSimilarJobs",
  async (jobId) => {
    const response = await api.get(`/jobs/${jobId}/similar`);
    return response.data.data;
  },
);

// ==========================
// Create Job
// ==========================
export const createJob = createAsyncThunk("jobs/createJob", async (jobData) => {
  const response = await api.post("/jobs", jobData);
  return response.data.data;
});

// ==========================
// Update Job
// ==========================
export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ jobId, jobData }) => {
    const response = await api.put(`/jobs/${jobId}`, jobData);
    return response.data.data;
  },
);

// ==========================
// Archive Job
// ==========================
export const archiveJob = createAsyncThunk("jobs/archiveJob", async (jobId) => {
  const response = await api.put(`/jobs/${jobId}/archive`);
  return response.data.data;
});

// ==========================
// Delete Job
// ==========================
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (jobId) => {
  await api.delete(`/jobs/${jobId}`);
  return jobId;
});
