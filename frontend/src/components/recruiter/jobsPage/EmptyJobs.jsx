import { Link } from "react-router-dom";

const EmptyJobs = ({ jobs }) => {
  const hasJobs = jobs.length > 0;

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-6
        py-12
        text-center
        shadow-sm
        sm:px-8
        sm:py-16
      "
    >
      {/* Illustration */}

      <div className="mb-6 text-6xl sm:text-7xl">{hasJobs ? "🔍" : "📄"}</div>

      {/* Heading */}

      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {hasJobs ? "No Matching Jobs" : "No Jobs Yet"}
      </h2>

      {/* Description */}

      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
        {hasJobs
          ? "No jobs match your current search or filter. Try changing your search keywords or selecting a different status."
          : "You haven't created any job postings yet. Create your first job posting and start receiving applications from talented candidates."}
      </p>

      {/* Action */}

      {!hasJobs && (
        <Link
          to="/recruiter/jobs/create"
          className="
            mt-8
            inline-flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-blue-700
            hover:shadow-lg
            sm:w-auto
          "
        >
          Create Your First Job
        </Link>
      )}
    </div>
  );
};

export default EmptyJobs;
