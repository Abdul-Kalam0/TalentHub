import { ArrowRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const getStatusColor = (status) => {
  switch (status) {
    case "Applied":
      return "bg-blue-100 text-blue-700";

    case "Reviewed":
      return "bg-yellow-100 text-yellow-700";

    case "Shortlisted":
      return "bg-green-100 text-green-700";

    case "Rejected":
      return "bg-red-100 text-red-700";

    case "Hired":
      return "bg-purple-100 text-purple-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const RecentApplications = ({ applications }) => {
  const navigate = useNavigate();

  const recentApplications = applications.slice(0, 2);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Applications
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Latest candidates who applied for your jobs.
          </p>
        </div>
      </div>

      {/* Empty State */}

      {recentApplications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="rounded-full bg-blue-50 p-5">
            <FileText className="h-10 w-10 text-blue-600" />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-900">
            No Applications Yet
          </h3>

          <p className="mt-2 max-w-md text-gray-500">
            Applications from candidates will appear here once they start
            applying to your jobs.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            {recentApplications.map((application) => (
              <button
                key={application._id}
                onClick={() =>
                  navigate(`/recruiter/jobs/${application.job._id}/applicants`)
                }
                className="group w-full rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Left */}

                  <div className="flex items-center gap-4">
                    {application.applicant.photo ? (
                      <img
                        src={application.applicant.photo}
                        alt={application.applicant.user.fullName}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
                        {application.applicant.user.fullName
                          .charAt(0)
                          .toUpperCase()}
                      </div>
                    )}

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                        {application.applicant.user.fullName}
                      </h3>

                      <p className="mt-1 truncate text-sm text-gray-500">
                        {application.job.title}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        Applied on{" "}
                        {new Date(application.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Right */}

                  <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                        application.status,
                      )}`}
                    >
                      {application.status}
                    </span>

                    <span className="flex items-center gap-2 text-sm font-medium text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                      View Applicant
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}

          <div className="mt-8 border-t border-gray-100 pt-6">
            <button
              onClick={() => navigate("/recruiter/jobs")}
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
            >
              View All Applicants
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default RecentApplications;
