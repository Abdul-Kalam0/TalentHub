// import { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import {
//   archiveJob,
//   deleteJob,
//   fetchMyJobs,
// } from "../../redux/jobs/jobsThunks";

// import JobStats from "../../components/recruiter/jobsPage/JobStats";
// import JobFilters from "../../components/recruiter/jobsPage/JobFilters";
// import JobCard from "../../components/recruiter/jobsPage/JobCard";
// import EmptyJobs from "../../components/recruiter/jobsPage/EmptyJobs";
// import LoadingJobs from "../../components/recruiter/jobsPage/LoadingJobs";
// import ConfirmModal from "../../components/recruiter/jobsPage/ConfirmModal";

// const JobsPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { jobs, loading } = useSelector((state) => state.jobs);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("all");

//   const [selectedJobId, setSelectedJobId] = useState(null);
//   const [modalType, setModalType] = useState(null);

//   useEffect(() => {
//     dispatch(fetchMyJobs());
//   }, [dispatch]);

//   const filteredJobs = useMemo(() => {
//     return jobs.filter((job) => {
//       const matchesSearch =
//         job.title.toLowerCase().includes(search.toLowerCase()) ||
//         job.location.toLowerCase().includes(search.toLowerCase());

//       const matchesStatus =
//         status === "all" ||
//         (status === "active" && !job.isArchived) ||
//         (status === "archived" && job.isArchived);

//       return matchesSearch && matchesStatus;
//     });
//   }, [jobs, search, status]);

//   const handleEdit = (jobId) => {
//     navigate(`/recruiter/jobs/${jobId}/edit`);
//   };

//   const handleViewApplicants = (jobId) => {
//     navigate(`/recruiter/jobs/${jobId}/applicants`);
//   };

//   const handleArchive = (jobId) => {
//     setSelectedJobId(jobId);
//     setModalType("archive");
//   };

//   const handleDelete = (jobId) => {
//     setSelectedJobId(jobId);
//     setModalType("delete");
//   };

//   const closeModal = () => {
//     setSelectedJobId(null);
//     setModalType(null);
//   };

//   const confirmAction = async () => {
//     try {
//       if (modalType === "archive") {
//         await dispatch(archiveJob(selectedJobId)).unwrap();

//         toast.success("Job archived successfully.");
//       }

//       if (modalType === "delete") {
//         await dispatch(deleteJob(selectedJobId)).unwrap();

//         toast.success("Job deleted successfully.");
//       }

//       closeModal();
//     } catch (error) {
//       toast.error(error || "Something went wrong.");
//     }
//   };

//   return (
//     <>
//       <div className="mx-auto max-w-7xl px-6 py-8">
//         {/* Header */}

//         <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Manage Jobs</h1>

//             <p className="mt-1 text-gray-600">
//               Manage and monitor all your job postings.
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/recruiter/jobs/create")}
//             className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
//           >
//             Create Job
//           </button>
//         </div>

//         {/* Statistics */}

//         <JobStats jobs={jobs} />

//         {/* Filters */}

//         <JobFilters
//           search={search}
//           setSearch={setSearch}
//           status={status}
//           setStatus={setStatus}
//         />

//         {/* Content */}

//         {loading ? (
//           <LoadingJobs />
//         ) : filteredJobs.length === 0 ? (
//           <EmptyJobs jobs={jobs} />
//         ) : (
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//             {filteredJobs.map((job) => (
//               <JobCard
//                 key={job._id}
//                 job={job}
//                 onEdit={handleEdit}
//                 onArchive={handleArchive}
//                 onDelete={handleDelete}
//                 onViewApplicants={handleViewApplicants}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <ConfirmModal
//         isOpen={modalType !== null}
//         title={modalType === "delete" ? "Delete Job" : "Archive Job"}
//         message={
//           modalType === "delete"
//             ? "Are you sure you want to delete this job? This action cannot be undone."
//             : "Are you sure you want to archive this job? Candidates will no longer be able to apply for this job."
//         }
//         confirmText={modalType === "delete" ? "Delete" : "Archive"}
//         cancelText="Cancel"
//         variant={modalType === "delete" ? "danger" : "warning"}
//         onConfirm={confirmAction}
//         onCancel={closeModal}
//       />
//     </>
//   );
// };

// export default JobsPage;

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

const JobsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobs, fetchLoading } = useSelector((state) => state.jobs);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [selectedJobId, setSelectedJobId] = useState(null);
  const [modalType, setModalType] = useState(null);

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
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Jobs</h1>

            <p className="mt-1 text-gray-600">
              Manage and monitor all your job postings.
            </p>
          </div>

          <button
            onClick={() => navigate("/recruiter/jobs/create")}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
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

        {/* Content */}

        {fetchLoading ? (
          <LoadingJobs />
        ) : filteredJobs.length === 0 ? (
          <EmptyJobs jobs={jobs} />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onEdit={handleEdit}
                onArchive={handleArchive}
                onDelete={handleDelete}
                onViewApplicants={handleViewApplicants}
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
            : "Are you sure you want to archive this job? Candidates will no longer be able to apply for this job."
        }
        confirmText={modalType === "delete" ? "Delete" : "Archive"}
        cancelText="Cancel"
        variant={modalType === "delete" ? "danger" : "warning"}
        onConfirm={confirmAction}
        onCancel={closeModal}
      />
    </>
  );
};

export default JobsPage;
