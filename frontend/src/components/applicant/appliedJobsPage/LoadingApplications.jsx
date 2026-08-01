const LoadingCard = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}

      <div className="animate-pulse p-6">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-2xl bg-gray-200" />

          <div className="flex-1">
            <div className="h-6 w-3/4 rounded bg-gray-200" />

            <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

            <div className="mt-4 h-4 w-36 rounded bg-gray-200" />
          </div>
        </div>

        {/* Meta */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gray-200" />

                <div className="flex-1">
                  <div className="h-3 w-16 rounded bg-gray-200" />

                  <div className="mt-2 h-4 w-24 rounded bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="h-3 w-16 rounded bg-gray-200" />

            <div className="mt-2 h-4 w-24 rounded bg-gray-200" />
          </div>

          <div className="h-8 w-28 rounded-full bg-gray-200" />
        </div>

        <div className="h-12 rounded-xl bg-gray-200" />
      </div>
    </div>
  );
};

const LoadingApplications = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}

      <div className="mb-8 animate-pulse rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="h-16 w-16 rounded-2xl bg-gray-200" />

            <div>
              <div className="h-8 w-64 rounded bg-gray-200" />

              <div className="mt-4 h-4 w-80 rounded bg-gray-200" />
            </div>
          </div>

          <div className="h-28 w-48 rounded-2xl bg-gray-200" />
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
          <div className="h-12 flex-1 rounded-xl bg-gray-200" />

          <div className="h-12 w-full rounded-xl bg-gray-200 lg:w-44" />
        </div>
      </div>

      {/* Filters */}

      <div className="mb-8 flex gap-3 overflow-hidden">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-12 w-28 rounded-xl bg-gray-200" />
        ))}
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LoadingApplications;
