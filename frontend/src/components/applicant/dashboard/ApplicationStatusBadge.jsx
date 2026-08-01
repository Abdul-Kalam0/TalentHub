const statusStyles = {
  Applied: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },

  Reviewed: {
    bg: "bg-amber-100",
    text: "text-amber-700",
  },

  Shortlisted: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },

  Rejected: {
    bg: "bg-red-100",
    text: "text-red-700",
  },

  Hired: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
};

const ApplicationStatusBadge = ({ status }) => {
  const style = statusStyles[status] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${style.bg}
        ${style.text}
      `}
    >
      {status}
    </span>
  );
};

export default ApplicationStatusBadge;
