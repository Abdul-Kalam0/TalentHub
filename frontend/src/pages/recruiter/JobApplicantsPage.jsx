import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchJobApplications } from "../../redux/applications/applicationsThunks";

import ApplicantsHeader from "../../components/recruiter/jobApplicantsPage/ApplicantsHeader";
import ApplicantsGrid from "../../components/recruiter/jobApplicantsPage/ApplicantsGrid";
import EmptyApplicants from "../../components/recruiter/jobApplicantsPage/EmptyApplicants";
import LoadingApplicants from "../../components/recruiter/jobApplicantsPage/LoadingApplicants";

const JobApplicantsPage = () => {
  const { jobId } = useParams();

  const dispatch = useDispatch();

  const { jobApplications, fetchLoading } = useSelector(
    (state) => state.applications,
  );

  useEffect(() => {
    dispatch(fetchJobApplications(jobId));
  }, [dispatch, jobId]);

  if (fetchLoading) {
    return <LoadingApplicants />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <ApplicantsHeader totalApplicants={jobApplications.length} />

      {jobApplications.length > 0 ? (
        <ApplicantsGrid applicants={jobApplications} />
      ) : (
        <EmptyApplicants />
      )}
    </div>
  );
};

export default JobApplicantsPage;
