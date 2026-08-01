const ExperienceFilter = ({ filters, setFilters }) => {
  const experienceLevels = [
    "Fresher",
    "0-1 Years",
    "1-3 Years",
    "3-5 Years",
    "5+ Years",
  ];

  const handleChange = (event) => {
    setFilters((previous) => ({
      ...previous,
      experience: event.target.value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Experience
      </label>

      <select
        value={filters.experience}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Experience Levels</option>

        {experienceLevels.map((experience) => (
          <option key={experience} value={experience}>
            {experience}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExperienceFilter;
