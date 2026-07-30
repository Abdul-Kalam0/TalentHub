import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";
import JobsPage from "../pages/public/JobsPage";
import JobDetailsPage from "../pages/public/JobDetailsPage";
import SignUpPage from "../pages/public/SignUpPage";
import NotFoundPage from "../pages/public/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/signup", element: <SignUpPage /> },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/jobs",
            element: <JobsPage />,
          },
          {
            path: "/jobs/:jobId",
            element: <JobDetailsPage />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
