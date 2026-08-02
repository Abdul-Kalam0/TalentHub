import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  archiveJob,
  deleteJob,
  fetchMyJobs,
} from "../../redux/jobs/jobsThunks";

import JobStats from "../../components/recruiter/jobsPage/JobStats";
import JobFilters from "../../components/recruiter/jobsPage/JobFilters";
import JobCard from "../../components/recruiter/jobsPage/JobCard";
import EmptyJobs from "../../components/recruiter/jobsPage/EmptyJobs";
import LoadingJobs from "../../components/recruiter/jobsPage/LoadingJobs";
import ConfirmModal from "../../components/recruiter/jobsPage/ConfirmModal";

import AIAssistantDrawer from "../../components/recruiter/aiAssistant/AIAssistantDrawer";

const JobsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobs, fetchLoading } = useSelector((state) => state.jobs);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [selectedJobId, setSelectedJobId] = useState(null);
  const [modalType, setModalType] = useState(null);

  // AI Assistant
  const [selectedJob, setSelectedJob] = useState(null);
  const [isAIOpen, setIsAIOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchMyJobs());
  }, [dispatch]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        (status === "active" && !job.isArchived) ||
        (status === "archived" && job.isArchived);

      return matchesSearch && matchesStatus;
    });
  }, [jobs, search, status]);

  const handleEdit = (jobId) => {
    navigate(`/recruiter/jobs/${jobId}/edit`);
  };

  const handleViewApplicants = (jobId) => {
    navigate(`/recruiter/jobs/${jobId}/applicants`);
  };

  const handleArchive = (jobId) => {
    setSelectedJobId(jobId);
    setModalType("archive");
  };

  const handleDelete = (jobId) => {
    setSelectedJobId(jobId);
    setModalType("delete");
  };

  // AI Assistant

  const handleOpenAI = (job) => {
    setSelectedJob(job);
    setIsAIOpen(true);
  };

  const handleCloseAI = () => {
    setSelectedJob(null);
    setIsAIOpen(false);
  };

  const closeModal = () => {
    setSelectedJobId(null);
    setModalType(null);
  };

  const confirmAction = async () => {
    try {
      if (modalType === "archive") {
        await dispatch(archiveJob(selectedJobId)).unwrap();
        toast.success("Job archived successfully.");
      }

      if (modalType === "delete") {
        await dispatch(deleteJob(selectedJobId)).unwrap();
        toast.success("Job deleted successfully.");
      }

      closeModal();
    } catch (error) {
      toast.error(error || "Something went wrong.");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Header */}

        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Manage Jobs
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Manage, monitor and optimize all your job postings from one place.
            </p>
          </div>

          <button
            onClick={() => navigate("/recruiter/jobs/create")}
            className="
              w-full
              rounded-xl
              bg-blue-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-blue-700
              hover:shadow-lg
              active:scale-[0.98]
              sm:w-auto
            "
          >
            Create Job
          </button>
        </div>

        {/* Statistics */}

        <JobStats jobs={jobs} />

        {/* Filters */}

        <JobFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        {/* Jobs */}

        {fetchLoading ? (
          <LoadingJobs />
        ) : filteredJobs.length === 0 ? (
          <EmptyJobs jobs={jobs} />
        ) : (
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onEdit={handleEdit}
                onArchive={handleArchive}
                onDelete={handleDelete}
                onViewApplicants={handleViewApplicants}
                onOpenAI={handleOpenAI}
              />
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}

      <ConfirmModal
        isOpen={modalType !== null}
        title={modalType === "delete" ? "Delete Job" : "Archive Job"}
        message={
          modalType === "delete"
            ? "Are you sure you want to permanently delete this job? This action cannot be undone."
            : "Are you sure you want to archive this job? Candidates will no longer be able to apply."
        }
        confirmText={modalType === "delete" ? "Delete" : "Archive"}
        cancelText="Cancel"
        variant={modalType === "delete" ? "danger" : "warning"}
        onConfirm={confirmAction}
        onCancel={closeModal}
      />

      {/* AI Assistant Drawer */}

      <AIAssistantDrawer
        isOpen={isAIOpen}
        onClose={handleCloseAI}
        job={selectedJob}
      />
    </>
  );
};

export default JobsPage;
