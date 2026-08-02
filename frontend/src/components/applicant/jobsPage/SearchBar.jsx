const SearchBar = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    const value = event.target.value;

    setFilters((previous) => ({
      ...previous,
      search: value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Search Jobs
      </label>

      <input
        type="text"
        value={filters.search}
        onChange={handleChange}
        placeholder="Job title, skills or keywords"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default SearchBar;
