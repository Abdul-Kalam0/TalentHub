const CompanyInfo = ({ recruiter, onEdit }) => {
  const isProfileComplete =
    recruiter.companyName &&
    recruiter.industry &&
    recruiter.companySize &&
    recruiter.description &&
    recruiter.companyLogo;

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        🏢 Company Information
      </h2>

      {/* Company Logo */}

      <div className="mb-10 flex flex-col items-center">
        {recruiter.companyLogo ? (
          <img
            src={recruiter.companyLogo}
            alt={recruiter.companyName}
            className="h-28 w-28 rounded-full border border-gray-200 object-cover shadow-sm"
          />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-5xl">
            🏢
          </div>
        )}

        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          {recruiter.companyName || "Your Company"}
        </h3>
      </div>

      {/* Company Details */}

      <div className="grid gap-5 md:grid-cols-2">
        {/* Company Name */}

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">Company Name</p>

          <p className="font-semibold text-gray-900">
            {recruiter.companyName || "Not Added"}
          </p>
        </div>

        {/* Industry */}

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">Industry</p>

          <p className="font-semibold text-gray-900">
            {recruiter.industry || "Not Added"}
          </p>
        </div>

        {/* Company Size */}

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">Company Size</p>

          <p className="font-semibold text-gray-900">
            {recruiter.companySize || "Not Added"}
          </p>
        </div>

        {/* Website */}

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">Website</p>

          {recruiter.website ? (
            <a
              href={recruiter.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              🌐 Visit Website
            </a>
          ) : (
            <p className="font-semibold text-gray-900">Not Added</p>
          )}
        </div>

        {/* Description */}

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 md:col-span-2">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Company Description
          </p>

          <p className="leading-7 text-gray-800">
            {recruiter.description ||
              "No company description has been added yet."}
          </p>
        </div>
      </div>

      {/* Action */}

      <div className="mt-8 flex justify-end">
        <button
          onClick={onEdit}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          {isProfileComplete ? "Edit Profile" : "Complete Profile"}
        </button>
      </div>
    </section>
  );
};

export default CompanyInfo;
