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
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest candidates who applied for your jobs.
          </p>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="py-12 text-center">
          <div className="text-5xl">📄</div>

          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            No Applications Yet
          </h3>

          <p className="mt-2 text-gray-500">
            Applications will appear here once candidates apply.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {applications.map((application) => (
            <div
              key={application._id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
            >
              {/* Left */}

              <div className="flex items-center gap-4">
                {application.applicant.photo ? (
                  <img
                    src={application.applicant.photo}
                    alt={application.applicant.user.fullName}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white">
                    {application.applicant.user.fullName
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {application.applicant.user.fullName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {application.job.title}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {new Date(application.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Right */}

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                  application.status,
                )}`}
              >
                {application.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentApplications;
