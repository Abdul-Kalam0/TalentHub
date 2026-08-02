import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const JobCardFooter = ({ job }) => {
  return (
    <div className="mt-auto flex items-center justify-between border-t border-gray-100 bg-gray-50 px-5 py-4">
      {/* Posted Time */}

      <p className="text-sm font-medium text-gray-500">
        Posted{" "}
        {formatDistanceToNow(new Date(job.createdAt), {
          addSuffix: true,
        })}
      </p>

      {/* View Details */}

      <Link
        to={`/applicant/jobs/${job._id}`}
        className="
          inline-flex
          items-center
          gap-2
          rounded-lg
          px-3
          py-2
          text-sm
          font-semibold
          text-blue-600
          transition-all
          duration-200
          hover:bg-blue-50
          hover:text-blue-700
        "
      >
        View Details
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default JobCardFooter;
