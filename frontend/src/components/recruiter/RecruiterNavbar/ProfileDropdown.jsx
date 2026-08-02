import { Link } from "react-router-dom";
import { Building2, ChevronDown, LogOut, PlusCircle } from "lucide-react";

const ProfileDropdown = ({
  user,
  isOpen,
  toggleDropdown,
  closeDropdown,
  handleLogout,
}) => {
  const initials =
    user?.fullName
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "R";

  return (
    <div className="relative hidden lg:block">
      {/* Trigger */}

      <button
        type="button"
        onClick={toggleDropdown}
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-2
          transition-all
          duration-200
          hover:border-blue-200
          hover:bg-gray-50
        "
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white xl:h-11 xl:w-11">
          {initials}
        </div>

        <div className="hidden min-w-0 xl:block">
          <h3 className="max-w-[150px] truncate text-sm font-semibold text-gray-900">
            {user?.fullName}
          </h3>
        </div>

        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      {isOpen && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-72
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-xl
          "
        >
          {/* User Info */}

          <div className="border-b border-gray-100 bg-gray-50 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {initials}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-semibold text-gray-900">
                  {user?.fullName}
                </h3>

                <p className="truncate text-sm text-gray-500">Recruiter</p>
              </div>
            </div>
          </div>

          {/* Menu */}

          <div className="p-2">
            <Link
              to="/recruiter/jobs/create"
              onClick={closeDropdown}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                text-gray-700
                transition
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              <PlusCircle size={18} className="shrink-0" />

              <span>Create Job</span>
            </Link>

            <Link
              to="/recruiter/profile"
              onClick={closeDropdown}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                text-gray-700
                transition
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              <Building2 size={18} className="shrink-0" />

              <span>Company Profile</span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-left
                text-sm
                font-medium
                text-red-600
                transition
                hover:bg-red-50
              "
            >
              <LogOut size={18} className="shrink-0" />

              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
