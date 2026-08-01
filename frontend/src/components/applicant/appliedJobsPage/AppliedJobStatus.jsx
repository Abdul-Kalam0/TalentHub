const statusConfig = {
  Applied: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
  },

  Reviewed: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },

  Shortlisted: {
    bg: "bg-green-50",
    text: "text-green-700",
    dot: "bg-green-500",
  },

  Rejected: {
    bg: "bg-red-50",
    text: "text-red-700",
    dot: "bg-red-500",
  },

  Hired: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
};

const AppliedJobStatus = ({ status }) => {
  const config = statusConfig[status] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
    dot: "bg-gray-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${config.bg} ${config.text}`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${config.dot}`} />

      {status}
    </span>
  );
};

export default AppliedJobStatus;
