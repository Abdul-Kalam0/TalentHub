import { Search, ArrowUpDown } from "lucide-react";

const BookmarkFilters = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) => {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by company or job title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              pl-11
              pr-4
              text-sm
              text-gray-900
              outline-none
              transition-all
              duration-200
              placeholder:text-gray-400
              focus:border-blue-500
              focus:bg-white
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/* Sort */}

        <div className="flex items-center gap-3">
          <div className="flex h-12 items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4">
            <ArrowUpDown size={17} className="text-gray-500" />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                cursor-pointer
                bg-transparent
                text-sm
                font-medium
                text-gray-700
                outline-none
              "
            >
              <option value="Newest">Newest</option>

              <option value="Oldest">Oldest</option>

              <option value="Company">Company (A-Z)</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookmarkFilters;
