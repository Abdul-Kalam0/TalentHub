import { useAuth } from "../../context/AuthContext";

import ApplicantNavbar from "./ApplicantNavbar";
import RecruiterNavbar from "./RecruiterNavbar";

const Navbar = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  switch (user.role) {
    case "applicant":
      return <ApplicantNavbar />;

    case "recruiter":
      return <RecruiterNavbar />;

    default:
      return null;
  }
};

export default Navbar;
