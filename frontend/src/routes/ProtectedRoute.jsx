import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const roleRedirects = {
  applicant: "/applicant/dashboard",
  recruiter: "/recruiter/dashboard",
};

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  // Wait until the initial authentication check completes.
  if (loading) {
    return null;
  }

  // User is not authenticated.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is authenticated but doesn't have permission.
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={roleRedirects[user.role]} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
