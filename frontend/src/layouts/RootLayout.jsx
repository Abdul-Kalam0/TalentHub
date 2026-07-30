import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/navbar/PublicNavbar";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <PublicNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
