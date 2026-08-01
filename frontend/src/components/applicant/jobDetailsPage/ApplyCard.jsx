import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Bookmark,
  BookmarkCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle,
  IndianRupee,
  MapPin,
} from "lucide-react";

import {
  createBookmark,
  deleteBookmark,
} from "../../../redux/bookmarks/bookmarksThunks";

import { applyForJob } from "../../../redux/applications/applicationsThunks";

const ApplyCard = ({ job, bookmark }) => {
  const dispatch = useDispatch();

  const { myApplications, applyLoading } = useSelector(
    (state) => state.applications,
  );

  const hasApplied = myApplications.some(
    (application) => application.job._id === job._id,
  );

  const handleBookmark = async () => {
    try {
      if (bookmark) {
        await dispatch(deleteBookmark(bookmark._id)).unwrap();

        toast.success("Removed from saved jobs.");
      } else {
        await dispatch(createBookmark(job._id)).unwrap();

        toast.success("Job saved successfully.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleApply = async () => {
    try {
      await dispatch(applyForJob(job._id)).unwrap();

      toast.success("Application submitted successfully.");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Company */}

      <div className="flex flex-col items-center text-center">
        {job.recruiter?.companyLogo ? (
          <img
            src={job.recruiter.companyLogo}
            alt={job.recruiter.companyName}
            className="h-24 w-24 rounded-xl border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-100">
            <Building2 size={42} className="text-gray-500" />
          </div>
        )}

        <h3 className="mt-5 text-2xl font-bold text-gray-900">
          {job.recruiter?.companyName}
        </h3>

        <p className="mt-2 text-gray-500">{job.title}</p>
      </div>

      {/* Quick Info */}

      <div className="my-8 space-y-5 border-y border-gray-200 py-6">
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin size={20} className="text-blue-600" />

          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <BriefcaseBusiness size={20} className="text-blue-600" />

          <span>{job.employmentType}</span>
        </div>

        <div className="flex items-center gap-3 font-semibold text-green-600">
          <IndianRupee size={20} />

          <span>
            ₹{job.salary.min.toLocaleString()} - ₹
            {job.salary.max.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Actions */}

      <div className="space-y-4">
        <button
          type="button"
          disabled={hasApplied || applyLoading}
          onClick={handleApply}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition ${
            hasApplied
              ? "cursor-not-allowed bg-green-600 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {hasApplied ? (
            <>
              <CheckCircle size={20} />
              Applied
            </>
          ) : applyLoading ? (
            "Applying..."
          ) : (
            "Apply Now"
          )}
        </button>

        <button
          type="button"
          onClick={handleBookmark}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
        >
          {bookmark ? (
            <>
              <BookmarkCheck size={20} className="fill-blue-600" />
              Saved Job
            </>
          ) : (
            <>
              <Bookmark size={20} />
              Save Job
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ApplyCard;
