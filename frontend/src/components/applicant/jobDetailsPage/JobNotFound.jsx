import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";

const JobNotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
        <SearchX size={48} className="text-red-500" />
      </div>

      <h1 className="mt-8 text-3xl font-bold text-gray-900">Job Not Found</h1>

      <p className="mt-4 max-w-lg text-gray-600">
        The job you're looking for may have been removed, archived, or the link
        is no longer valid.
      </p>

      <Link
        to="/applicant/jobs"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Browse Jobs
      </Link>
    </div>
  );
};

export default JobNotFound;
