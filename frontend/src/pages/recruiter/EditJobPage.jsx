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
    <div className="mx-auto max-w-5xl px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Edit Job</h1>

        <p className="mt-2 text-gray-600">
          Update your job posting information.
        </p>
      </div>

      <JobForm mode="edit" job={selectedJob} />
    </div>
  );
};

export default EditJobPage;
