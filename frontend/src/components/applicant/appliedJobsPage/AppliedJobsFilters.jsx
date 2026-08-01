const filters = [
  "All",
  "Applied",
  "Reviewed",
  "Shortlisted",
  "Rejected",
  "Hired",
];

const AppliedJobsFilters = ({ applications, activeFilter, onFilterChange }) => {
  const getCount = (filter) => {
    if (filter === "All") {
      return applications.length;
    }

    return applications.filter((application) => application.status === filter)
      .length;
  };

  return (
    <section className="mb-8">
      <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={`flex shrink-0 items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <span>{filter}</span>

              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {getCount(filter)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default AppliedJobsFilters;
