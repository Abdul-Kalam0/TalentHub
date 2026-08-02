import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchJobs } from "../../redux/jobs/jobsThunks";
import { fetchBookmarks } from "../../redux/bookmarks/bookmarksThunks";

import FilterSidebar from "../../components/applicant/jobsPage/FilterSidebar";
import JobGrid from "../../components/applicant/jobsPage/JobGrid";
import Pagination from "../../components/applicant/jobsPage/Pagination";
import LoadingJobs from "../../components/applicant/jobsPage/LoadingJobs";
import EmptyJobs from "../../components/applicant/jobsPage/EmptyJobs";

const DEFAULT_FILTERS = {
  search: "",
  employmentType: "",
  workplaceType: "",
  experience: "",
  location: "",
  salary: "",
  sort: "latest",
  page: 1,
  limit: 9,
};

const JobsPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const { jobs, pagination, fetchLoading } = useSelector((state) => state.jobs);

  const { bookmarks } = useSelector((state) => state.bookmarks);

  const filters = {
    search: searchParams.get("search") || DEFAULT_FILTERS.search,
    employmentType:
      searchParams.get("employmentType") || DEFAULT_FILTERS.employmentType,
    workplaceType:
      searchParams.get("workplaceType") || DEFAULT_FILTERS.workplaceType,
    experience: searchParams.get("experience") || DEFAULT_FILTERS.experience,
    location: searchParams.get("location") || DEFAULT_FILTERS.location,
    salary: searchParams.get("salary") || DEFAULT_FILTERS.salary,
    sort: searchParams.get("sort") || DEFAULT_FILTERS.sort,
    page: Number(searchParams.get("page")) || DEFAULT_FILTERS.page,
    limit: Number(searchParams.get("limit")) || DEFAULT_FILTERS.limit,
  };

  const setFilters = (updater) => {
    const updated = typeof updater === "function" ? updater(filters) : updater;

    const params = new URLSearchParams();

    Object.entries(updated).forEach(([key, value]) => {
      if (
        value !== "" &&
        value !== null &&
        value !== undefined &&
        !(key === "page" && value === 1) &&
        !(key === "sort" && value === "latest") &&
        !(key === "limit" && value === 9)
      ) {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  // Fetch Jobs

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, [dispatch, searchParams]);

  // Fetch Bookmarks

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Jobs</h1>

        <p className="mt-2 text-gray-600">
          Discover opportunities that match your skills and career goals.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Sidebar */}

        <aside className="lg:col-span-3">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </aside>

        {/* Jobs */}

        <section className="lg:col-span-9">
          {fetchLoading ? (
            <LoadingJobs />
          ) : jobs.length === 0 ? (
            <EmptyJobs />
          ) : (
            <>
              <JobGrid jobs={jobs} bookmarks={bookmarks} />

              <Pagination
                pagination={pagination}
                filters={filters}
                setFilters={setFilters}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default JobsPage;
