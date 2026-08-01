import { ArrowRight, Building2, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

import ApplicationStatusBadge from "./ApplicationStatusBadge";

const RecentApplicationCard = ({ application }) => {
  const { job } = application;

  return (
    <article className="group flex flex-col gap-6 p-6 transition-colors duration-300 hover:bg-gray-50 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex items-start gap-4">
        {/* Company Logo */}

        {job?.recruiter?.companyLogo ? (
          <img
            src={job.recruiter.companyLogo}
            alt={job.recruiter.companyName}
            className="h-16 w-16 rounded-2xl border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
            <Building2 size={28} className="text-blue-600" />
          </div>
        )}

        {/* Job Info */}

        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-gray-900">
            {job?.title}
          </h3>

          <p className="mt-1 text-gray-600">{job?.recruiter?.companyName}</p>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays size={16} />
            Applied {new Date(application.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex flex-col items-start gap-4 lg:items-end">
        <ApplicationStatusBadge status={application.status} />

        <Link
          to={`/applicant/jobs/${job._id}`}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View Job
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default RecentApplicationCard;
