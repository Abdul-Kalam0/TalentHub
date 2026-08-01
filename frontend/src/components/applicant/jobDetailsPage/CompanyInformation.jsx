import { Building2, CalendarDays, Clock3, Users } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const CompanyInformation = ({ job }) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Company Information
      </h2>

      <div className="flex items-center gap-5">
        {/* Company Logo */}

        {job.recruiter?.companyLogo ? (
          <img
            src={job.recruiter.companyLogo}
            alt={job.recruiter.companyName}
            className="h-20 w-20 rounded-xl border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100">
            <Building2 size={36} className="text-gray-500" />
          </div>
        )}

        {/* Company Name */}

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {job.recruiter?.companyName}
          </h3>

          <p className="mt-1 text-gray-500">
            Hiring for <span className="font-medium">{job.title}</span>
          </p>
        </div>
      </div>

      {/* Information */}

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {/* Openings */}

        <div className="flex items-start gap-3">
          <Users size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Open Positions</p>

            <p className="font-medium text-gray-900">{job.openings}</p>
          </div>
        </div>

        {/* Posted */}

        <div className="flex items-start gap-3">
          <CalendarDays size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Posted</p>

            <p className="font-medium text-gray-900">
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>

        {/* Deadline */}

        <div className="flex items-start gap-3">
          <Clock3 size={22} className="mt-1 text-red-500" />

          <div>
            <p className="text-sm text-gray-500">Application Deadline</p>

            <p className="font-medium text-gray-900">
              {new Date(job.applicationDeadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInformation;
