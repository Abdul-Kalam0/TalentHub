import { useSelector } from "react-redux";

const JobCard = ({ job, onEdit, onArchive, onDelete, onViewApplicants }) => {
  const { archiveLoading, deleteLoading } = useSelector((state) => state.jobs);

  return (
    <div
      className="
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        sm:p-6
      "
    >
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="truncate text-xl font-bold text-gray-900">
            {job.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {job.employmentType} • {job.workplaceType}
          </p>
        </div>

        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            job.isArchived
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />

          {job.isArchived ? "Archived" : "Active"}
        </span>
      </div>

      {/* Details */}

      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-gray-500">📍 Location</span>

          <span className="truncate text-right text-sm font-semibold text-gray-900">
            {job.location}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-gray-500">💰 Salary</span>

          <span className="text-right text-sm font-semibold text-gray-900">
            ₹{job.salary.min.toLocaleString()} – ₹
            {job.salary.max.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-gray-500">👥 Applicants</span>

          <button
            onClick={() => onViewApplicants(job._id)}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            {job.applicationCount}
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-gray-500">📅 Posted</span>

          <span className="text-sm font-semibold text-gray-900">
            {new Date(job.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Actions */}

      <div className="mt-6 grid grid-cols-2 gap-3 lg:flex lg:flex-wrap">
        <button
          onClick={() => onViewApplicants(job._id)}
          className="
            rounded-xl
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            transition-all
            hover:bg-blue-700
          "
        >
          View Applicants
        </button>

        {!job.isArchived && (
          <button
            onClick={() => onEdit(job._id)}
            className="
      rounded-xl
      border
      border-amber-500
      px-4
      py-2.5
      text-sm
      font-semibold
      text-amber-600
      transition-all
      hover:bg-amber-500
      hover:text-white
    "
          >
            Edit
          </button>
        )}

        {!job.isArchived && (
          <button
            disabled={archiveLoading}
            onClick={() => onArchive(job._id)}
            className="
              rounded-xl
              border
              border-gray-400
              px-4
              py-2.5
              text-sm
              font-semibold
              text-gray-700
              transition-all
              hover:bg-gray-700
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {archiveLoading ? "Archiving..." : "Archive"}
          </button>
        )}

        <button
          disabled={deleteLoading}
          onClick={() => onDelete(job._id)}
          className="
            rounded-xl
            border
            border-red-600
            px-4
            py-2.5
            text-sm
            font-semibold
            text-red-600
            transition-all
            hover:bg-red-600
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {deleteLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
