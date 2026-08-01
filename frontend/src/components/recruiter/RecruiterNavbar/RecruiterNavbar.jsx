import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import ProfileDropdown from "./ProfileDropdown";
import MobileDrawer from "./MobileDrawer";

const RecruiterNavbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsMobileMenuOpen(false);
  };

  const openDrawer = () => {
    setIsMobileMenuOpen(true);
  };

  const handleLogout = async () => {
    closeDropdown();
    closeDrawer();

    const result = await logout();

    if (result.success) {
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-3 lg:flex">
            <DesktopNavigation />

            <div ref={dropdownRef}>
              <ProfileDropdown
                user={user}
                isOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                closeDropdown={closeDropdown}
                handleLogout={handleLogout}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={openDrawer}
            className="rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileDrawer
        user={user}
        isOpen={isMobileMenuOpen}
        closeDrawer={closeDrawer}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default RecruiterNavbar;
