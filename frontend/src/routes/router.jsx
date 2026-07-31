import { createBrowserRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

// Layouts
import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import HomePage from "../pages/public/HomePage";
import JobsPage from "../pages/public/JobsPage";
import JobDetailsPage from "../pages/public/JobDetailsPage";
import LoginPage from "../pages/public/LoginPage";
import SignupPage from "../pages/public/SignupPage";
import NotFoundPage from "../pages/public/NotFoundPage";

// Applicant Pages
import ApplicantDashboardPage from "../pages/applicant/DashboardPage";
import ApplicantProfilePage from "../pages/applicant/ProfilePage";
import AppliedJobsPage from "../pages/applicant/AppliedJobsPage";
import ApplicantSettingsPage from "../pages/applicant/SettingsPage";

// Recruiter Pages
import RecruiterDashboardPage from "../pages/recruiter/DashboardPage";
import RecruiterProfilePage from "../pages/recruiter/ProfilePage";
import RecruiterJobsPage from "../pages/recruiter/JobsPage";
import CreateJobPage from "../pages/recruiter/CreateJobPage";
import EditJobPage from "../pages/recruiter/EditJobPage";
import ApplicantsPage from "../pages/recruiter/ApplicantsPage";
import RecruiterSettingsPage from "../pages/recruiter/SettingsPage";

const router = createBrowserRouter([
  // ===========================
  // Public Routes
  // ===========================
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetailsPage />,
      },

      // Auth Routes
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
    ],
  },

  // ===========================
  // Applicant Routes
  // ===========================
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
            path: "/applicant/profile",
            element: <ApplicantProfilePage />,
          },
          {
            path: "/applicant/applied-jobs",
            element: <AppliedJobsPage />,
          },
          {
            path: "/applicant/settings",
            element: <ApplicantSettingsPage />,
          },
        ],
      },
    ],
  },

  // ===========================
  // Recruiter Routes
  // ===========================
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
            path: "/recruiter/profile",
            element: <RecruiterProfilePage />,
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
            path: "/recruiter/applicants",
            element: <ApplicantsPage />,
          },
          {
            path: "/recruiter/settings",
            element: <RecruiterSettingsPage />,
          },
        ],
      },
    ],
  },

  // ===========================
  // 404
  // ===========================
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
