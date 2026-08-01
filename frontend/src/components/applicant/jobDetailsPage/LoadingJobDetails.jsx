const LoadingJobDetails = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-6 py-8">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left */}

        <div className="space-y-6 lg:col-span-8">
          {/* Hero */}

          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <div className="flex gap-5">
              <div className="h-20 w-20 rounded-xl bg-gray-200" />

              <div className="flex-1">
                <div className="h-8 w-72 rounded bg-gray-200" />

                <div className="mt-4 h-5 w-48 rounded bg-gray-200" />

                <div className="mt-6 flex gap-4">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-4 w-24 rounded bg-gray-200" />
                </div>

                <div className="mt-6 h-6 w-40 rounded bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Sections */}

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-8"
            >
              <div className="mb-6 h-6 w-48 rounded bg-gray-200" />

              <div className="space-y-4">
                <div className="h-4 rounded bg-gray-200" />
                <div className="h-4 rounded bg-gray-200" />
                <div className="h-4 w-11/12 rounded bg-gray-200" />
                <div className="h-4 w-10/12 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Right */}

        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mx-auto h-20 w-20 rounded-xl bg-gray-200" />

            <div className="mx-auto mt-6 h-6 w-40 rounded bg-gray-200" />

            <div className="mx-auto mt-4 h-4 w-32 rounded bg-gray-200" />

            <div className="mt-8 h-12 rounded bg-gray-200" />

            <div className="mt-4 h-12 rounded bg-gray-200" />
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-6 h-6 w-40 rounded bg-gray-200" />

            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="mb-4 h-24 rounded-lg bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingJobDetails;
