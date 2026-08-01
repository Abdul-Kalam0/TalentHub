import { Link, NavLink } from "react-router-dom";
import { LogOut, UserRound, X } from "lucide-react";

import Logo from "./Logo";
import navigation from "./navigation";

const MobileDrawer = ({ user, isOpen, closeDrawer, handleLogout }) => {
  const initials =
    user?.fullName
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "A";

  return (
    <>
      {/* Overlay */}

      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <Logo onClick={closeDrawer} />

          <button
            type="button"
            onClick={closeDrawer}
            className="rounded-xl p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* User */}

        <div className="border-b border-gray-100 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              {initials}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-gray-900">
                {user?.fullName}
              </h2>

              <p className="text-sm text-gray-500">Applicant</p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={18} />

                {item.label}
              </NavLink>
            );
          })}

          <Link
            to="/applicant/profile"
            onClick={closeDrawer}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <UserRound size={18} />
            View Profile
          </Link>
        </nav>

        {/* Footer */}

        <div className="border-t border-gray-200 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;
