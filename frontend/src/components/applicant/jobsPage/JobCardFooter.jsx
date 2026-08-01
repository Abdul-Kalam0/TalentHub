import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const JobCardFooter = ({ job }) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 p-5">
      {/* Posted Time */}

      <p className="text-sm text-gray-500">
        Posted{" "}
        {formatDistanceToNow(new Date(job.createdAt), {
          addSuffix: true,
        })}
      </p>

      {/* View Details */}

      <Link
        to={`/applicant/jobs/${job._id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
      >
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default JobCardFooter;
