import { BriefcaseBusiness, Mail, Phone } from "lucide-react";

const statusConfig = {
  Applied: {
    badge: "bg-blue-100 text-blue-700",
    header: "bg-blue-50",
  },

  Reviewed: {
    badge: "bg-amber-100 text-amber-700",
    header: "bg-amber-50",
  },

  Shortlisted: {
    badge: "bg-green-100 text-green-700",
    header: "bg-green-50",
  },

  Rejected: {
    badge: "bg-red-100 text-red-700",
    header: "bg-red-50",
  },

  Hired: {
    badge: "bg-emerald-100 text-emerald-700",
    header: "bg-emerald-50",
  },
};

const ApplicantHeader = ({ application }) => {
  const { applicant, status } = application;

  const fullName = applicant.user?.fullName || "Unknown Applicant";

  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const styles = statusConfig[status] || statusConfig.Applied;

  return (
    <div
      className={`-m-6 mb-6 rounded-t-2xl border-b border-gray-200 p-6 ${styles.header}`}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        {/* Left */}

        <div className="flex min-w-0 items-start gap-4">
          {/* Avatar */}

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-blue-600 shadow-sm">
            {initials}
          </div>

          {/* Details */}

          <div className="min-w-0">
            <h2 className="break-words text-2xl font-bold text-gray-900">
              {fullName}
            </h2>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
              <BriefcaseBusiness size={15} />

              {applicant.experience}
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="shrink-0" />

                <span className="break-all">
                  {applicant.user?.email || "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="shrink-0" />

                <span>{applicant.user?.phone || "Not Provided"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}

        <span
          className={`inline-flex self-start rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${styles.badge}`}
        >
          ● {status}
        </span>
      </div>
    </div>
  );
};

export default ApplicantHeader;
