import ApplicantActions from "./ApplicantActions";
import ApplicantHeader from "./ApplicantHeader";
import ApplicantSkills from "./ApplicantSkills";
import ApplicantStatus from "./ApplicantStatus";

const ApplicantCard = ({ application }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Header */}

      <div className="border-b border-gray-100 p-6">
        <ApplicantHeader application={application} />
      </div>

      {/* Body */}

      <div className="grid gap-8 p-6 lg:grid-cols-2">
        {/* Left Section */}

        <div className="space-y-8">
          <ApplicantSkills application={application} />

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Applied On
            </h3>

            <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              {new Date(application.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="space-y-8">
          <ApplicantStatus application={application} />

          <ApplicantActions application={application} />
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
