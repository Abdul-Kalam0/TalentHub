import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const roleRedirects = {
  applicant: "/applicant/dashboard",
  recruiter: "/recruiter/dashboard",
};

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-lg font-medium">Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={roleRedirects[user.role]} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
