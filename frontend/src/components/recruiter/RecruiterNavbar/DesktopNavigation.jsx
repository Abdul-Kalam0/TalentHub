import { Link, NavLink } from "react-router-dom";
import { PlusCircle } from "lucide-react";

import navigation from "./navigation";

const DesktopNavigation = () => {
  return (
    <>
      {/* Navigation */}

      <nav className="hidden items-center gap-2 lg:flex">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Create Job */}

      {/* <Link
        to="/recruiter/jobs/create"
        className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-md lg:flex"
      >
        <PlusCircle size={18} />

        <span>Create Job</span>
      </Link> */}
    </>
  );
};

export default DesktopNavigation;
