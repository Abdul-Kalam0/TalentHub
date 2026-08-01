import { Link } from "react-router-dom";

const Logo = ({ onClick }) => {
  return (
    <Link
      to="/recruiter/dashboard"
      onClick={onClick}
      className="group flex flex-col"
    >
      <h1 className="text-2xl font-bold tracking-tight text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
        TalentHub
      </h1>

      <p className="text-xs font-medium tracking-wide text-gray-500">
        Recruiter Portal
      </p>
    </Link>
  );
};

export default Logo;
