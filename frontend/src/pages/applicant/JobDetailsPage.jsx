import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchJobById, fetchSimilarJobs } from "../../redux/jobs/jobsThunks";

import { fetchMyApplications } from "../../redux/applications/applicationsThunks";

import JobHero from "../../components/applicant/jobDetailsPage/JobHero";
import JobOverview from "../../components/applicant/jobDetailsPage/JobOverview";
import JobDescription from "../../components/applicant/jobDetailsPage/JobDescription";
import JobResponsibilities from "../../components/applicant/jobDetailsPage/JobResponsibilities";
import JobRequirements from "../../components/applicant/jobDetailsPage/JobRequirements";
import CompanyInformation from "../../components/applicant/jobDetailsPage/CompanyInformation";
import ApplyCard from "../../components/applicant/jobDetailsPage/ApplyCard";
import SimilarJobs from "../../components/applicant/jobDetailsPage/SimilarJobs";
import LoadingJobDetails from "../../components/applicant/jobDetailsPage/LoadingJobDetails";
import JobNotFound from "../../components/applicant/jobDetailsPage/JobNotFound";

const JobDetailsPage = () => {
  const { jobId } = useParams();

  const dispatch = useDispatch();

  const { selectedJob, similarJobs, fetchLoading } = useSelector(
    (state) => state.jobs,
  );

  const { bookmarks } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(fetchJobById(jobId));
    dispatch(fetchSimilarJobs(jobId));
    dispatch(fetchMyApplications());
  }, [dispatch, jobId]);

  if (fetchLoading) {
    return <LoadingJobDetails />;
  }

  if (!selectedJob) {
    return <JobNotFound />;
  }

  const bookmark = bookmarks.find(
    (bookmark) => bookmark.job._id === selectedJob._id,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Section */}

        <div className="space-y-8 lg:col-span-8">
          <JobHero job={selectedJob} />

          <JobOverview job={selectedJob} />

          <JobDescription job={selectedJob} />

          <JobResponsibilities job={selectedJob} />

          <JobRequirements job={selectedJob} />

          <CompanyInformation job={selectedJob} />
        </div>

        {/* Right Sidebar */}

        <aside className="space-y-6 lg:col-span-4">
          <ApplyCard job={selectedJob} bookmark={bookmark} />

          <SimilarJobs jobs={similarJobs} />
        </aside>
      </div>
    </div>
  );
};

export default JobDetailsPage;
