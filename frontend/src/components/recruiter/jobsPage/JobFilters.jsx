const JobFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Search */}

        <div className="relative lg:col-span-2">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search by job title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-11 pr-10 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 transition hover:text-red-500"
            >
              ×
            </button>
          )}
        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
