import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const roleRedirects = {
  applicant: "/applicant/dashboard",
  recruiter: "/recruiter/dashboard",
};

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600">
          Hii
        </div>
      </div>
    );
  }

  if (user) {
    return <Navigate to={roleRedirects[user.role]} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
