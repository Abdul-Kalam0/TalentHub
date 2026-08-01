import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <Link
      to="/applicant/profile"
      className="
        group
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-blue-600
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-blue-700
        hover:shadow-lg
      "
    >
      Complete Profile
      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default ProfileButton;
