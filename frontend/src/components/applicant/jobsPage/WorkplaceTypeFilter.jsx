const WorkplaceTypeFilter = ({ filters, setFilters }) => {
  const workplaceTypes = ["Remote", "Hybrid", "On-site"];

  const handleChange = (event) => {
    setFilters((previous) => ({
      ...previous,
      workplaceType: event.target.value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Workplace Type
      </label>

      <select
        value={filters.workplaceType}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Workplace Types</option>

        {workplaceTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkplaceTypeFilter;
