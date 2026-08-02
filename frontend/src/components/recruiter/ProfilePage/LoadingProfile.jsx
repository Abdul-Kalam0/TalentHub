const LoadingProfile = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-6 sm:px-6 sm:py-8">
      {/* Header */}

      <div className="mb-8">
        <div className="h-8 w-48 rounded-xl bg-gray-200 sm:w-60" />

        <div className="mt-3 h-4 w-64 rounded-xl bg-gray-200 sm:w-80" />
      </div>

      {/* Recruiter Information */}

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-8 h-8 w-56 rounded-xl bg-gray-200" />

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          {/* Avatar */}

          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-gray-200 sm:h-28 sm:w-28" />

            <div className="mt-4 h-7 w-32 rounded-full bg-gray-200" />
          </div>

          {/* Cards */}

          <div className="grid w-full flex-1 grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4"
              >
                <div className="mb-2 h-3 w-16 rounded bg-gray-200 sm:w-24" />

                <div className="h-5 w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}

      <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-8 h-8 w-56 rounded-xl bg-gray-200" />

        {/* Logo */}

        <div className="mb-8 flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-gray-200 sm:h-28 sm:w-28" />

          <div className="mt-4 h-8 w-40 rounded-lg bg-gray-200" />
        </div>

        {/* Details */}

        <div className="grid gap-4 md:grid-cols-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={index === 4 ? "md:col-span-2" : ""}>
              <div className="mb-2 h-4 w-24 rounded bg-gray-200" />

              <div
                className={`rounded-xl bg-gray-200 ${
                  index === 4 ? "h-28" : "h-12"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="mt-8 flex justify-center sm:justify-end">
          <div className="h-11 w-full rounded-xl bg-gray-200 sm:w-40" />
        </div>
      </section>
    </div>
  );
};

export default LoadingProfile;
