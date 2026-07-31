import { Link, NavLink } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          TalentHub
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors duration-200 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors duration-200 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Jobs
          </NavLink>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
