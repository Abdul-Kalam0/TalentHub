import { Bot, BriefcaseBusiness, Users, X } from "lucide-react";

const AIHeader = ({ job, onClose }) => {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="flex items-start justify-between gap-4 p-6">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <Bot size={28} className="text-blue-600" />
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900">
              AI Hiring Assistant
            </h2>

            <p className="mt-1 truncate text-sm font-medium text-gray-700">
              {job?.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness size={16} />

                <span>{job?.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={16} />

                <span>{job?.applicationCount || 0} Applicants</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-xl p-2 transition hover:bg-gray-100"
        >
          <X size={22} />
        </button>
      </div>
    </div>
  );
};

export default AIHeader;
