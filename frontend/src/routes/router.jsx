import { Navigate, createBrowserRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../pages/public/LoginPage";
import SignupPage from "../pages/public/SignupPage";
import NotFoundPage from "../pages/public/NotFoundPage";

import ApplicantDashboardPage from "../pages/applicant/DashboardPage";
import ApplicantJobsPage from "../pages/applicant/JobsPage";
import ApplicantJobDetailsPage from "../pages/applicant/JobDetailsPage";
import ApplicantProfilePage from "../pages/applicant/ProfilePage";
import AppliedJobsPage from "../pages/applicant/AppliedJobsPage";
import ApplicantSettingsPage from "../pages/applicant/SettingsPage";

import RecruiterDashboardPage from "../pages/recruiter/DashboardPage";
import RecruiterJobsPage from "../pages/recruiter/JobsPage";
import CreateJobPage from "../pages/recruiter/CreateJobPage";
import EditJobPage from "../pages/recruiter/EditJobPage";
import RecruiterProfilePage from "../pages/recruiter/ProfilePage";
import RecruiterSettingsPage from "../pages/recruiter/SettingsPage";
import JobApplicantsPage from "../pages/recruiter/JobApplicantsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={["applicant"]} />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/applicant/dashboard",
            element: <ApplicantDashboardPage />,
          },
          {
            path: "/applicant/jobs",
            element: <ApplicantJobsPage />,
          },
          {
            path: "/applicant/jobs/:jobId",
            element: <ApplicantJobDetailsPage />,
          },
          {
            path: "/applicant/applied-jobs",
            element: <AppliedJobsPage />,
          },
          {
            path: "/applicant/profile",
            element: <ApplicantProfilePage />,
          },
          {
            path: "/applicant/settings",
            element: <ApplicantSettingsPage />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={["recruiter"]} />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/recruiter/dashboard",
            element: <RecruiterDashboardPage />,
          },
          {
            path: "/recruiter/jobs",
            element: <RecruiterJobsPage />,
          },
          {
            path: "/recruiter/jobs/create",
            element: <CreateJobPage />,
          },
          {
            path: "/recruiter/jobs/:jobId/edit",
            element: <EditJobPage />,
          },
          {
            path: "/recruiter/jobs/:jobId/applicants",
            element: <JobApplicantsPage />,
          },
          {
            path: "/recruiter/profile",
            element: <RecruiterProfilePage />,
          },
          {
            path: "/recruiter/settings",
            element: <RecruiterSettingsPage />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
