const LoadingJobs = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          {/* Header */}

          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="h-6 w-48 rounded bg-gray-200"></div>

              <div className="mt-2 h-4 w-36 rounded bg-gray-200"></div>
            </div>

            <div className="h-7 w-20 rounded-full bg-gray-200"></div>
          </div>

          {/* Details */}

          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="h-4 w-24 rounded bg-gray-200"></div>

              <div className="h-4 w-28 rounded bg-gray-200"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-20 rounded bg-gray-200"></div>

              <div className="h-4 w-32 rounded bg-gray-200"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-24 rounded bg-gray-200"></div>

              <div className="h-4 w-12 rounded bg-gray-200"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-20 rounded bg-gray-200"></div>

              <div className="h-4 w-24 rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="h-10 w-36 rounded-lg bg-gray-200"></div>

            <div className="h-10 w-20 rounded-lg bg-gray-200"></div>

            <div className="h-10 w-24 rounded-lg bg-gray-200"></div>

            <div className="h-10 w-20 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingJobs;
