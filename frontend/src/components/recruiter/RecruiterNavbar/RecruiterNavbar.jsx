import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import Logo from "../../components/recruiter/RecruiterNavbar/Logo";
import DesktopNavigation from "../../components/recruiter/RecruiterNavbar/DesktopNavigation";
import ProfileDropdown from "../../components/recruiter/RecruiterNavbar/ProfileDropdown";
import MobileDrawer from "../../components/recruiter/RecruiterNavbar/MobileDrawer";

const RecruiterNavbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close profile dropdown when clicking outside
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

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const openDrawer = () => {
    setIsMobileMenuOpen(true);
  };

  const closeDrawer = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}

          <Logo />

          {/* Desktop */}

          <div className="hidden items-center gap-4 lg:flex">
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

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={openDrawer}
            aria-label="Open menu"
            className="
              rounded-xl
              border
              border-gray-200
              p-2
              transition-all
              duration-200
              hover:bg-gray-100
              lg:hidden
            "
          >
            <Menu size={22} className="sm:h-6 sm:w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}

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
