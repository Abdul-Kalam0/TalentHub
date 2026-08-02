const JobFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Search */}

        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search by job title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              py-3
              pl-11
              pr-10
              text-sm
              outline-none
              transition-all
              duration-200
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-xl
                text-gray-400
                transition
                hover:text-red-500
              "
            >
              ×
            </button>
          )}
        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            text-sm
            outline-none
            transition-all
            duration-200
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            lg:w-64
          "
        >
          <option value="all">All Jobs</option>
          <option value="active">🟢 Active Jobs</option>
          <option value="archived">🔴 Archived Jobs</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilters;
