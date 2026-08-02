import { useState } from "react";
import { Menu, X } from "lucide-react";

import SearchBar from "./SearchBar";
import EmploymentTypeFilter from "./EmploymentTypeFilter";
import WorkplaceTypeFilter from "./WorkplaceTypeFilter";
import ExperienceFilter from "./ExperienceFilter";
import LocationFilter from "./LocationFilter";
import SalaryFilter from "./SalaryFilter";
import SortFilter from "./SortFilter";
import ResetFilters from "./ResetFilters";

const FilterSidebar = ({ filters, setFilters }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =========================
          Desktop Sidebar
      ========================== */}

      <div className="sticky top-24 hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:block">
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

      {/* =========================
          Floating Button (Mobile)
      ========================== */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-6
          right-6
          z-40
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          shadow-xl
          transition
          hover:bg-blue-700
          lg:hidden
        "
      >
        <Menu size={24} />
      </button>

      {/* =========================
          Mobile Drawer
      ========================== */}

      {open && (
        <>
          {/* Overlay */}

          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}

          <div
            className="
              fixed
              right-0
              top-0
              z-50
              h-full
              w-full
              max-w-sm
              overflow-y-auto
              bg-white
              p-6
              shadow-2xl
              lg:hidden
            "
          >
            {/* Header */}

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Filters</h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 transition hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Filters */}

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
        </>
      )}
    </>
  );
};

export default FilterSidebar;
