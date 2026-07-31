const RecruiterInfo = ({ recruiter }) => {
  return (
    <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        👤 Recruiter Information
      </h2>

      <div className="flex flex-col items-center gap-8 lg:flex-row">
        {/* Avatar */}

        <div className="flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white ring-4 ring-blue-100">
            {recruiter.user.fullName.charAt(0).toUpperCase()}
          </div>

          <span className="mt-4 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Active Recruiter
          </span>
        </div>

        {/* Information */}

        <div className="grid flex-1 gap-5 md:grid-cols-3">
          {/* Full Name */}

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-500">Full Name</p>

            <p className="font-semibold text-gray-900">
              {recruiter.user.fullName}
            </p>
          </div>

          {/* Email */}

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-500">
              Email Address
            </p>

            <p className="break-all font-semibold text-gray-900">
              {recruiter.user.email}
            </p>
          </div>

          {/* Role */}

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-500">Role</p>

            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold capitalize text-blue-700">
              {recruiter.user.role}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterInfo;
