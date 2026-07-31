import { Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import ApplicantNavbar from "../components/navbar/ApplicantNavbar";
import RecruiterNavbar from "../components/navbar/RecruiterNavbar";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <>
      {user?.role === "applicant" ? <ApplicantNavbar /> : <RecruiterNavbar />}

      <main className="min-h-[calc(100vh-80px)] bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
