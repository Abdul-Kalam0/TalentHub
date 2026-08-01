const LocationFilter = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    setFilters((previous) => ({
      ...previous,
      location: event.target.value,
      page: 1,
    }));
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Location
      </label>

      <input
        type="text"
        value={filters.location}
        onChange={handleChange}
        placeholder="e.g. Noida, Bangalore"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default LocationFilter;
