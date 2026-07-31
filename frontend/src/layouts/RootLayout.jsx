import { Outlet } from "react-router-dom";

import PublicNavbar from "../components/navbar/PublicNavbar";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <PublicNavbar />

      <main className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
