import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const RecruiterNavbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          to="/recruiter/dashboard"
          className="text-3xl font-bold text-blue-600"
        >
          TalentHub
        </Link>

        {/* Navigation */}

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            to="/recruiter/dashboard"
            className="transition hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link to="/recruiter/jobs" className="transition hover:text-blue-600">
            Manage Jobs
          </Link>

          <Link
            to="/recruiter/profile"
            className="transition hover:text-blue-600"
          >
            Company Profile
          </Link>
        </nav>

        {/* Profile Dropdown */}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-gray-100"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>

            <div className="text-left">
              <p className="font-medium text-gray-800">{user?.fullName}</p>
            </div>

            <svg
              className={`h-4 w-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
              {/* User Info */}

              <div className="border-b bg-gray-50 px-5 py-4">
                <p className="font-semibold text-gray-900">{user?.fullName}</p>

                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>

              {/* Menu */}

              <div className="py-2">
                <Link
                  to="/recruiter/jobs/create"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 transition hover:bg-gray-100"
                >
                  <span className="text-lg">➕</span>

                  <span>Create Job</span>
                </Link>

                <Link
                  to="/recruiter/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 transition hover:bg-gray-100"
                >
                  <span className="text-lg">🏢</span>

                  <span>Company Profile</span>
                </Link>

                <button
                  onClick={async () => {
                    setIsDropdownOpen(false);
                    await handleLogout();
                  }}
                  className="flex w-full items-center gap-3 px-5 py-3 text-left text-red-600 transition hover:bg-red-50"
                >
                  <span className="text-lg">🚪</span>

                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default RecruiterNavbar;
