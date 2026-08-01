import AppliedJobHeader from "./AppliedJobHeader";
import AppliedJobMeta from "./AppliedJobMeta";
import AppliedJobStatus from "./AppliedJobStatus";
import AppliedJobActions from "./AppliedJobActions";

const AppliedJobCard = ({ application }) => {
  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-3xl
        border border-gray-200 bg-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      {/* Top */}

      <div className="p-6">
        <AppliedJobHeader application={application} />

        <AppliedJobMeta application={application} />
      </div>

      {/* Push Footer */}

      <div className="flex-1" />

      {/* Footer */}

      <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Applied
            </p>

            <p className="mt-1 text-sm font-medium text-gray-700">
              {new Date(application.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <AppliedJobStatus status={application.status} />
        </div>

        <AppliedJobActions application={application} />
      </div>
    </article>
  );
};

export default AppliedJobCard;
