const RecruiterInfo = ({ recruiter }) => {
  return (
    <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mb-8 sm:p-6">
      {/* Heading */}

      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:mb-8 sm:text-2xl">
        👤 Recruiter Information
      </h2>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* Avatar */}

        <div className="flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white ring-4 ring-blue-100 sm:h-28 sm:w-28 sm:text-4xl">
            {recruiter.user.fullName.charAt(0).toUpperCase()}
          </div>

          <span className="mt-4 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
            Active Recruiter
          </span>
        </div>

        {/* Information */}

        <div className="grid w-full flex-1 grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {/* Full Name */}

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
              Full Name
            </p>

            <p className="truncate text-sm font-semibold text-gray-900 sm:text-base">
              {recruiter.user.fullName}
            </p>
          </div>

          {/* Email */}

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
              Email
            </p>

            <p className="truncate text-sm font-semibold text-gray-900 sm:text-base">
              {recruiter.user.email}
            </p>
          </div>

          {/* Role */}

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
              Role
            </p>

            <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold capitalize text-blue-700 sm:px-3 sm:text-sm">
              {recruiter.user.role}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterInfo;
