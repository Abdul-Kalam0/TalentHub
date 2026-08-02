import { Bookmark, BookmarkCheck, Building2 } from "lucide-react";

const JobCardHeader = ({ job, bookmark, onBookmark }) => {
  return (
    <div className="flex min-h-[112px] items-start justify-between border-b border-gray-100 p-5">
      {/* Company */}

      <div className="flex flex-1 items-center gap-4">
        {job.recruiter?.companyLogo ? (
          <img
            src={job.recruiter.companyLogo}
            alt={job.recruiter.companyName}
            className="h-14 w-14 flex-shrink-0 rounded-xl border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100">
            <Building2 size={28} className="text-gray-500" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          {/* Job Title */}

          <h2
            className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-gray-900"
            title={job.title}
          >
            {job.title}
          </h2>

          {/* Company Name */}

          <p
            className="mt-2 truncate text-sm text-gray-600"
            title={job.recruiter?.companyName}
          >
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
        className="ml-4 rounded-full p-2 transition-colors duration-200 hover:bg-blue-50"
      >
        {bookmark ? (
          <BookmarkCheck size={22} className="fill-blue-600 text-blue-600" />
        ) : (
          <Bookmark
            size={22}
            className="text-gray-500 transition-colors hover:text-blue-600"
          />
        )}
      </button>
    </div>
  );
};

export default JobCardHeader;
