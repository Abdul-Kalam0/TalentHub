import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/navbar/DashboardNavbar";
import Footer from "../components/footer/Footer";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
