const EmploymentTypeFilter = ({ filters, setFilters }) => {
  const employmentTypes = [
    "Full-time",
    "Part-time",
    "Internship",
    "Contract",
  ];

  const handleChange = (event) => {
    const value = event.target.value;

    setFilters((previous) => ({
      ...previous,
      employmentType: value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Employment Type
      </label>

      <select
        value={filters.employmentType}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Employment Types</option>

        {employmentTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmploymentTypeFilter;