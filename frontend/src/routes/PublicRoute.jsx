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
      <div className="flex h-screen items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md text-center">
          {/* Logo */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg">
            T
          </div>

          {/* Brand */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900">TalentHub</h2>

          {/* Welcome */}

          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Welcome Back! 👋
          </h3>

          <p className="mt-2 text-gray-500">
            Preparing your TalentHub workspace...
          </p>

          {/* Progress Bar */}

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-blue-600" />
          </div>
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
