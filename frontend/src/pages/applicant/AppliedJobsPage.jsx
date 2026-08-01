import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMyApplications } from "../../redux/applications/applicationsThunks";

import AppliedJobsHeader from "../../components/applicant/appliedJobsPage/AppliedJobsHeader";
import AppliedJobsFilters from "../../components/applicant/appliedJobsPage/AppliedJobsFilters";
import AppliedJobsGrid from "../../components/applicant/appliedJobsPage/AppliedJobsGrid";
import EmptyApplications from "../../components/applicant/appliedJobsPage/EmptyApplications";
import LoadingApplications from "../../components/applicant/appliedJobsPage/LoadingApplications";

const AppliedJobsPage = () => {
  const dispatch = useDispatch();

  const { myApplications, fetchLoading } = useSelector(
    (state) => state.applications,
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  useEffect(() => {
    dispatch(fetchMyApplications());
  }, [dispatch]);

  const filteredApplications = useMemo(() => {
    let applications = [...myApplications];

    // Filter
    if (activeFilter !== "All") {
      applications = applications.filter(
        (application) => application.status === activeFilter,
      );
    }

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      applications = applications.filter((application) => {
        const company =
          application.job.recruiter?.companyName?.toLowerCase() || "";

        const title = application.job.title?.toLowerCase() || "";

        return company.includes(query) || title.includes(query);
      });
    }

    // Sort
    switch (sortBy) {
      case "Oldest":
        applications.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        break;

      case "Company":
        applications.sort((a, b) =>
          a.job.recruiter.companyName.localeCompare(
            b.job.recruiter.companyName,
          ),
        );
        break;

      default:
        applications.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
    }

    return applications;
  }, [myApplications, activeFilter, searchQuery, sortBy]);

  if (fetchLoading) {
    return <LoadingApplications />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <AppliedJobsHeader
        totalApplications={myApplications.length}
        filteredCount={filteredApplications.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <AppliedJobsFilters
        applications={myApplications}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filteredApplications.length > 0 ? (
        <AppliedJobsGrid applications={filteredApplications} />
      ) : (
        <EmptyApplications />
      )}
    </div>
  );
};

export default AppliedJobsPage;
