const ResetFilters = ({ setFilters }) => {
  const handleReset = () => {
    setFilters({
      search: "",
      employmentType: "",
      workplaceType: "",
      experience: "",
      location: "",
      salary: "",
      sort: "latest",
      page: 1,
      limit: 9,
    });
  };

  return (
    <button
      type="button"
      onClick={handleReset}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
    >
      Reset Filters
    </button>
  );
};

export default ResetFilters;
