import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchJobById } from "../../redux/jobs/jobsThunks";

import LoadingJobs from "../../components/recruiter/jobsPage/LoadingJobs";
import JobForm from "../../components/recruiter/jobForm/JobForm";

const EditJobPage = () => {
  const dispatch = useDispatch();

  const { jobId } = useParams();

  const { selectedJob, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobById(jobId));
  }, [dispatch, jobId]);

  if (loading || !selectedJob) {
    return <LoadingJobs />;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Header */}

      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
          Edit Job
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Update your job posting information.
        </p>
      </div>

      {/* Form */}

      <JobForm mode="edit" job={selectedJob} />
    </div>
  );
};

export default EditJobPage;
