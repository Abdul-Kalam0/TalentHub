import { Link } from "react-router-dom";

const EmptyJobs = ({ jobs }) => {
  const hasJobs = jobs.length > 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm">
      <div className="mb-5 text-6xl">{hasJobs ? "🔍" : "📄"}</div>

      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        {hasJobs ? "No Matching Jobs" : "No Jobs Yet"}
      </h2>

      <p className="mx-auto mb-8 max-w-lg text-gray-600">
        {hasJobs
          ? "No jobs match your current search or filter. Try changing your search criteria."
          : "You haven't created any job postings yet. Create your first job and start receiving applications."}
      </p>

      {!hasJobs && (
        <Link
          to="/recruiter/jobs/create"
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Create Your First Job
        </Link>
      )}
    </div>
  );
};

export default EmptyJobs;
