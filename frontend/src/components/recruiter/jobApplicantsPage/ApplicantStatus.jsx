import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Check } from "lucide-react";

import { updateApplicationStatus } from "../../../redux/applications/applicationsThunks";

const APPLICATION_STATUS = [
  "Applied",
  "Reviewed",
  "Shortlisted",
  "Rejected",
  "Hired",
];

const statusStyles = {
  Applied: "border-blue-600 bg-blue-600 text-white shadow-md",

  Reviewed: "border-amber-500 bg-amber-500 text-white shadow-md",

  Shortlisted: "border-green-600 bg-green-600 text-white shadow-md",

  Rejected: "border-red-600 bg-red-600 text-white shadow-md",

  Hired: "border-emerald-600 bg-emerald-600 text-white shadow-md",
};

const ApplicantStatus = ({ application }) => {
  const dispatch = useDispatch();

  const { updateLoading } = useSelector((state) => state.applications);

  const handleStatusChange = async (status) => {
    if (updateLoading || status === application.status) {
      return;
    }

    try {
      await dispatch(
        updateApplicationStatus({
          applicationId: application._id,
          status,
        }),
      ).unwrap();

      toast.success("Application status updated.");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
        Update Status
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {APPLICATION_STATUS.map((status) => {
          const active = application.status === status;

          return (
            <button
              key={status}
              type="button"
              disabled={updateLoading || active}
              onClick={() => handleStatusChange(status)}
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                active
                  ? statusStyles[status]
                  : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
              } ${updateLoading ? "cursor-not-allowed opacity-60" : ""}`}
            >
              {active && <Check size={16} />}

              {status}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicantStatus;
