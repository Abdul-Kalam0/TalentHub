import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// ==========================
// Fetch Recruiter Dashboard
// ==========================
export const fetchRecruiterDashboard = createAsyncThunk(
  "dashboard/fetchRecruiterDashboard",
  async () => {
    const response = await api.get("/dashboard/recruiter");
    return response.data.data;
  },
);

// ==========================
// Fetch Applicant Dashboard
// ==========================
export const fetchApplicantDashboard = createAsyncThunk(
  "dashboard/fetchApplicantDashboard",
  async () => {
    const response = await api.get("/dashboard/applicant");
    return response.data.data;
  },
);
