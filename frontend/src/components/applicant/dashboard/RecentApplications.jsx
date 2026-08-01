import RecentApplicationCard from "./RecentApplicationCard";
import ViewAllButton from "./ViewAllButton";

const RecentApplications = ({ applications = [] }) => {
  const recentApplications = applications.slice(0, 2);

  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your latest job applications.
          </p>
        </div>

        <ViewAllButton />
      </div>

      {/* Content */}

      {recentApplications.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {recentApplications.map((application) => (
            <RecentApplicationCard
              key={application._id}
              application={application}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <h3 className="text-xl font-semibold text-gray-900">
            No applications yet
          </h3>

          <p className="mt-2 max-w-md text-gray-500">
            Start applying for jobs to track your application progress here.
          </p>
        </div>
      )}
    </section>
  );
};

export default RecentApplications;
