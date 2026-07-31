const LoadingProfile = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <div className="h-8 w-56 rounded bg-gray-200"></div>

        <div className="mt-3 h-4 w-80 rounded bg-gray-200"></div>
      </div>

      {/* Recruiter Information */}

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-8 h-8 w-64 rounded bg-gray-200"></div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Avatar */}

          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-gray-200"></div>

            <div className="mt-4 h-6 w-32 rounded-full bg-gray-200"></div>
          </div>

          {/* Recruiter Cards */}

          <div className="grid flex-1 gap-5 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4"
              >
                <div className="mb-3 h-4 w-24 rounded bg-gray-200"></div>

                <div className="h-6 w-full rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-8 h-8 w-64 rounded bg-gray-200"></div>

        {/* Logo */}

        <div className="mb-8 flex flex-col items-center">
          <div className="h-28 w-28 rounded-full bg-gray-200"></div>

          <div className="mt-4 h-10 w-40 rounded-lg bg-gray-200"></div>
        </div>

        {/* Company Details */}

        <div className="grid gap-6 md:grid-cols-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={index === 4 ? "md:col-span-2" : ""}>
              <div className="mb-2 h-4 w-28 rounded bg-gray-200"></div>

              <div
                className={`rounded-lg bg-gray-200 ${
                  index === 4 ? "h-32" : "h-12"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="mt-8 flex justify-end">
          <div className="h-12 w-40 rounded-lg bg-gray-200"></div>
        </div>
      </section>
    </div>
  );
};

export default LoadingProfile;
