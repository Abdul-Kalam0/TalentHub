import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
  const { user, loading } = useAuth();

  // Wait until authentication check is complete
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-lg font-medium">Loading...</h2>
      </div>
    );
  }

  // Redirect authenticated users away from login/signup
  if (user) {
    switch (user.role) {
      case "applicant":
        return <Navigate to="/applicant/dashboard" replace />;

      case "recruiter":
        return <Navigate to="/recruiter/dashboard" replace />;

      default:
        return <Navigate to="/" replace />;
    }
  }

  // Allow guests to access public auth routes
  return <Outlet />;
};

export default PublicRoute;
