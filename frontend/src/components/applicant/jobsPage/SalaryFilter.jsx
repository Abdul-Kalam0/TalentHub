const SalaryFilter = ({ filters, setFilters }) => {
  const salaryOptions = [
    {
      label: "₹3 LPA+",
      value: 300000,
    },
    {
      label: "₹5 LPA+",
      value: 500000,
    },
    {
      label: "₹8 LPA+",
      value: 800000,
    },
    {
      label: "₹10 LPA+",
      value: 1000000,
    },
    {
      label: "₹15 LPA+",
      value: 1500000,
    },
    {
      label: "₹20 LPA+",
      value: 2000000,
    },
  ];

  const handleChange = (event) => {
    const value = event.target.value;

    setFilters((previous) => ({
      ...previous,
      salary: value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Minimum Salary
      </label>

      <select
        value={filters.salary}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Salaries</option>

        {salaryOptions.map((salary) => (
          <option key={salary.value} value={salary.value}>
            {salary.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SalaryFilter;
