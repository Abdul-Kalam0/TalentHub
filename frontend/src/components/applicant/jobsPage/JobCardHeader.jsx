import { Bookmark, BookmarkCheck, Building2 } from "lucide-react";

const JobCardHeader = ({ job, bookmark, onBookmark }) => {
  return (
    <div className="flex items-start justify-between border-b border-gray-100 p-5">
      {/* Company */}

      <div className="flex items-center gap-4">
        {job.recruiter?.companyLogo ? (
          <img
            src={job.recruiter.companyLogo}
            alt={job.recruiter.companyName}
            className="h-14 w-14 rounded-lg border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100">
            <Building2 size={28} className="text-gray-500" />
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>

          <p className="mt-1 text-sm text-gray-600">
            {job.recruiter?.companyName}
          </p>
        </div>
      </div>

      {/* Bookmark */}

      <button
        type="button"
        onClick={onBookmark}
        title={bookmark ? "Remove from saved jobs" : "Save job"}
        aria-label={bookmark ? "Remove bookmark" : "Save bookmark"}
        className="rounded-full p-2 transition hover:bg-blue-50"
      >
        {bookmark ? (
          <BookmarkCheck size={22} className="fill-blue-600 text-blue-600" />
        ) : (
          <Bookmark
            size={22}
            className="text-gray-500 transition hover:text-blue-600"
          />
        )}
      </button>
    </div>
  );
};

export default JobCardHeader;
