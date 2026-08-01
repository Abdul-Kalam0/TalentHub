const SortFilter = ({ filters, setFilters }) => {
  const sortOptions = [
    {
      label: "Latest",
      value: "latest",
    },
    {
      label: "Oldest",
      value: "oldest",
    },
    {
      label: "Highest Salary",
      value: "salary-desc",
    },
    {
      label: "Lowest Salary",
      value: "salary-asc",
    },
  ];

  const handleChange = (event) => {
    setFilters((previous) => ({
      ...previous,
      sort: event.target.value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Sort By
      </label>

      <select
        value={filters.sort}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;
