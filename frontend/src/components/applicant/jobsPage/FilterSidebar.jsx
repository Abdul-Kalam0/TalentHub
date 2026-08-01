import SearchBar from "./SearchBar";
import EmploymentTypeFilter from "./EmploymentTypeFilter";
import WorkplaceTypeFilter from "./WorkplaceTypeFilter";
import ExperienceFilter from "./ExperienceFilter";
import LocationFilter from "./LocationFilter";
import SalaryFilter from "./SalaryFilter";
import SortFilter from "./SortFilter";
import ResetFilters from "./ResetFilters";

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">Filters</h2>

      <div className="space-y-6">
        <SearchBar filters={filters} setFilters={setFilters} />

        <EmploymentTypeFilter filters={filters} setFilters={setFilters} />

        <WorkplaceTypeFilter filters={filters} setFilters={setFilters} />

        <ExperienceFilter filters={filters} setFilters={setFilters} />

        <LocationFilter filters={filters} setFilters={setFilters} />

        <SalaryFilter filters={filters} setFilters={setFilters} />

        <SortFilter filters={filters} setFilters={setFilters} />

        <ResetFilters setFilters={setFilters} />
      </div>
    </div>
  );
};

export default FilterSidebar;
