import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AppliedJobActions = ({ application }) => {
  return (
    <Link
      to={`/applicant/jobs/${application.job._id}`}
      className="
        group flex w-full items-center justify-center gap-2
        rounded-xl border border-blue-600
        bg-white
        px-4 py-3
        text-sm font-semibold text-blue-600
        transition-all duration-300
        hover:bg-blue-600
        hover:text-white
        hover:shadow-lg
        active:scale-[0.98]
      "
    >
      <span>View Details</span>

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default AppliedJobActions;
