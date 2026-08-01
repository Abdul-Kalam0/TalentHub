import { BriefcaseBusiness, Search } from "lucide-react";

const AppliedJobsHeader = ({
  totalApplications,
  filteredCount,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) => {
  return (
    <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <BriefcaseBusiness size={30} className="text-blue-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              Applied Jobs
            </h1>

            <p className="mt-2 max-w-xl text-gray-500">
              Track every application you've submitted and monitor your hiring
              progress.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 text-center">
          <p className="text-sm font-medium text-gray-500">
            Total Applications
          </p>

          <h2 className="mt-1 text-4xl font-bold text-blue-600">
            {totalApplications}
          </h2>

          <p className="mt-1 text-xs text-gray-500">Showing {filteredCount}</p>
        </div>
      </div>

      {/* Search & Sort */}

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by job title or company..."
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Sort */}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-600"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Company</option>
        </select>
      </div>
    </section>
  );
};

export default AppliedJobsHeader;
