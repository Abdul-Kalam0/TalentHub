import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const RecruiterNavbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/recruiter/dashboard"
          className="text-3xl font-bold text-blue-600"
        >
          TalentHub
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link to="/recruiter/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/recruiter/jobs" className="hover:text-blue-600">
            My Jobs
          </Link>

          <Link to="/recruiter/applicants" className="hover:text-blue-600">
            Applicants
          </Link>

          <Link to="/recruiter/profile" className="hover:text-blue-600">
            Profile
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <span className="font-medium">{user?.fullName}</span>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default RecruiterNavbar;
