// const JobCard = ({ job, onEdit, onArchive, onDelete, onViewApplicants }) => {
//   return (
//     <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
//       {/* Header */}

//       <div className="mb-6 flex items-start justify-between">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>

//           <p className="mt-1 text-sm text-gray-500">
//             {job.employmentType} • {job.workplaceType}
//           </p>
//         </div>

//         <span
//           className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
//             job.isArchived
//               ? "bg-red-100 text-red-700"
//               : "bg-green-100 text-green-700"
//           }`}
//         >
//           <span className="h-2 w-2 rounded-full bg-current"></span>

//           {job.isArchived ? "Archived" : "Active"}
//         </span>
//       </div>

//       {/* Details */}

//       <div className="flex-1 space-y-4 text-sm">
//         <div className="flex justify-between">
//           <span className="text-gray-500">📍 Location</span>

//           <span className="font-medium text-gray-900">{job.location}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-gray-500">💰 Salary</span>

//           <span className="font-medium text-gray-900">
//             ₹{job.salary.min.toLocaleString()} – ₹
//             {job.salary.max.toLocaleString()}
//           </span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-gray-500">👥 Applicants</span>

//           <button
//             onClick={() => onViewApplicants(job._id)}
//             className="font-medium text-blue-600 hover:underline"
//           >
//             {job.applicationCount}
//           </button>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-gray-500">📅 Posted</span>

//           <span className="font-medium text-gray-900">
//             {new Date(job.createdAt).toLocaleDateString()}
//           </span>
//         </div>
//       </div>

//       {/* Actions */}

//       <div className="mt-8 flex flex-wrap gap-3">
//         <button
//           onClick={() => onViewApplicants(job._id)}
//           className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
//         >
//           View Applicants
//         </button>

//         <button
//           onClick={() => onEdit(job._id)}
//           className="rounded-lg border border-amber-500 px-4 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-500 hover:text-white"
//         >
//           Edit
//         </button>

//         {!job.isArchived && (
//           <button
//             onClick={() => onArchive(job._id)}
//             className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-700 hover:text-white"
//           >
//             Archive
//           </button>
//         )}

//         <button
//           onClick={() => onDelete(job._id)}
//           className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

import { useSelector } from "react-redux";

const JobCard = ({ job, onEdit, onArchive, onDelete, onViewApplicants }) => {
  const { archiveLoading, deleteLoading } = useSelector((state) => state.jobs);

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>

          <p className="mt-1 text-sm text-gray-500">
            {job.employmentType} • {job.workplaceType}
          </p>
        </div>

        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            job.isArchived
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current"></span>

          {job.isArchived ? "Archived" : "Active"}
        </span>
      </div>

      {/* Details */}

      <div className="flex-1 space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">📍 Location</span>

          <span className="font-medium text-gray-900">{job.location}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">💰 Salary</span>

          <span className="font-medium text-gray-900">
            ₹{job.salary.min.toLocaleString()} – ₹
            {job.salary.max.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">👥 Applicants</span>

          <button
            onClick={() => onViewApplicants(job._id)}
            className="font-medium text-blue-600 hover:underline"
          >
            {job.applicationCount}
          </button>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">📅 Posted</span>

          <span className="font-medium text-gray-900">
            {new Date(job.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Actions */}

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => onViewApplicants(job._id)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Applicants
        </button>

        <button
          onClick={() => onEdit(job._id)}
          className="rounded-lg border border-amber-500 px-4 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-500 hover:text-white"
        >
          Edit
        </button>

        {!job.isArchived && (
          <button
            disabled={archiveLoading}
            onClick={() => onArchive(job._id)}
            className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {archiveLoading ? "Archiving..." : "Archive"}
          </button>
        )}

        <button
          disabled={deleteLoading}
          onClick={() => onDelete(job._id)}
          className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {deleteLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
