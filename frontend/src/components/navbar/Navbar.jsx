import { useAuth } from "../../context/AuthContext";

import PublicNavbar from "./PublicNavbar";
import ApplicantNavbar from "./ApplicantNavbar";
import RecruiterNavbar from "./RecruiterNavbar";

const Navbar = () => {
  const { user } = useAuth();

  if (!user) {
    return <PublicNavbar />;
  }

  if (user.role === "applicant") {
    return <ApplicantNavbar />;
  }

  if (user.role === "recruiter") {
    return <RecruiterNavbar />;
  }

  return <PublicNavbar />;
};

export default Navbar;
