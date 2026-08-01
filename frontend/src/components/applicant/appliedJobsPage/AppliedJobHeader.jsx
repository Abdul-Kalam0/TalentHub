import { Building2, CalendarDays } from "lucide-react";

const AppliedJobHeader = ({ application }) => {
  const { job } = application;

  const appliedDate = new Date(application.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <header className="flex items-start gap-4">
      {/* Company Logo */}

      {job.recruiter?.companyLogo ? (
        <img
          src={job.recruiter.companyLogo}
          alt={job.recruiter.companyName}
          className="h-16 w-16 rounded-2xl border border-gray-200 object-cover shadow-sm"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
          <Building2 size={28} className="text-blue-600" />
        </div>
      )}

      {/* Content */}

      <div className="min-w-0 flex-1">
        <h2 className="line-clamp-2 text-xl font-bold leading-tight text-gray-900">
          {job.title}
        </h2>

        <p className="mt-1 text-base font-medium text-gray-600">
          {job.recruiter?.companyName}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={15} />

          <span>Applied on {appliedDate}</span>
        </div>
      </div>
    </header>
  );
};

export default AppliedJobHeader;
