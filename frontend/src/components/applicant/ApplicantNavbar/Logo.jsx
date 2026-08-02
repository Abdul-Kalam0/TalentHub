import { Link } from "react-router-dom";

const Logo = ({ onClick }) => {
  return (
    <Link
      to="/applicant/dashboard"
      onClick={onClick}
      className="group flex flex-col"
    >
      <h1 className="text-2xl font-bold tracking-tight text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
        TalentHub
      </h1>
    </Link>
  );
};

export default Logo;
