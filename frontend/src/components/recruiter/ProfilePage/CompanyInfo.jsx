const CompanyInfo = ({ recruiter, onEdit }) => {
  const isProfileComplete =
    recruiter.companyName &&
    recruiter.industry &&
    recruiter.companySize &&
    recruiter.description &&
    recruiter.companyLogo;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            🏢 Company Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your organization details.
          </p>
        </div>

        <button
          onClick={onEdit}
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
            hover:shadow-md
            sm:w-auto
          "
        >
          {isProfileComplete ? "Edit Profile" : "Complete Profile"}
        </button>
      </div>

      {/* Logo */}

      <div className="mb-10 flex flex-col items-center">
        {recruiter.companyLogo ? (
          <img
            src={recruiter.companyLogo}
            alt={recruiter.companyName}
            className="
              h-24
              w-24
              rounded-full
              border
              border-gray-200
              object-cover
              shadow-md
              sm:h-28
              sm:w-28
            "
          />
        ) : (
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-gray-100
              text-4xl
              shadow-sm
              sm:h-28
              sm:w-28
              sm:text-5xl
            "
          >
            🏢
          </div>
        )}

        <h3 className="mt-5 text-center text-xl font-bold text-gray-900">
          {recruiter.companyName || "Your Company"}
        </h3>
      </div>

      {/* Details */}

      <div className="grid gap-4 md:grid-cols-2">
        {/* Company Name */}

        <InfoCard
          title="Company Name"
          value={recruiter.companyName || "Not Added"}
        />

        {/* Industry */}

        <InfoCard title="Industry" value={recruiter.industry || "Not Added"} />

        {/* Company Size */}

        <InfoCard
          title="Company Size"
          value={recruiter.companySize || "Not Added"}
        />

        {/* Website */}

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/30">
          <p className="mb-2 text-sm font-medium text-gray-500">Website</p>

          {recruiter.website ? (
            <a
              href={recruiter.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              🌐 Visit Website
            </a>
          ) : (
            <p className="font-semibold text-gray-900">Not Added</p>
          )}
        </div>

        {/* Description */}

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/30 md:col-span-2">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Company Description
          </p>

          <p className="leading-7 text-gray-700">
            {recruiter.description ||
              "No company description has been added yet."}
          </p>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, value }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/30">
      <p className="mb-2 text-sm font-medium text-gray-500">{title}</p>

      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
};

export default CompanyInfo;
