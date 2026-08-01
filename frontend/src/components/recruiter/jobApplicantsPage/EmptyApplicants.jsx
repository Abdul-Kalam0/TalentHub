import { Users } from "lucide-react";

const EmptyApplicants = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-8 py-20 text-center">
      {/* Icon */}

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
        <Users size={40} className="text-blue-600" />
      </div>

      {/* Heading */}

      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        No Applicants Yet
      </h2>

      {/* Description */}

      <p className="mt-3 max-w-md text-gray-600">
        This job hasn't received any applications yet. Once candidates apply,
        you'll be able to review their profiles, resumes, and update their
        application status here.
      </p>
    </div>
  );
};

export default EmptyApplicants;
