import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <h1>This is Public Navabr </h1>
            <Link to="/">Home</Link>
          </div>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </>
  );
};

export default PublicNavbar;
