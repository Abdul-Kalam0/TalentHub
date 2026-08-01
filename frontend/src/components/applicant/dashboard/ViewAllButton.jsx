import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllButton = () => {
  return (
    <Link
      to="/applicant/applied-jobs"
      className="
        group
        inline-flex
        items-center
        gap-2
        text-sm
        font-semibold
        text-blue-600
        transition-all
        duration-300
        hover:text-blue-700
      "
    >
      View All
      <ArrowRight
        size={16}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </Link>
  );
};

export default ViewAllButton;
