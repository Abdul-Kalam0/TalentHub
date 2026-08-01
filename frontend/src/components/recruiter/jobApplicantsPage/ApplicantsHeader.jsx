import { Users } from "lucide-react";

const ApplicantsHeader = ({ totalApplicants }) => {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Left Content */}

      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-blue-100 p-3">
          <Users size={28} className="text-blue-600" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Applicants</h1>

          <p className="mt-2 text-gray-600">
            Review applications, update candidate status, and manage the hiring
            process.
          </p>
        </div>
      </div>

      {/* Right Content */}

      <div className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 text-center">
        <p className="text-sm text-gray-500">Total Applicants</p>

        <h2 className="text-3xl font-bold text-blue-600">{totalApplicants}</h2>
      </div>
    </div>
  );
};

export default ApplicantsHeader;
