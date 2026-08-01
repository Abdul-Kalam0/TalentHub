const LoadingJobs = () => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          {/* Header */}

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-lg bg-gray-200" />

              <div className="space-y-2">
                <div className="h-5 w-40 rounded bg-gray-200" />

                <div className="h-4 w-28 rounded bg-gray-200" />
              </div>
            </div>

            <div className="h-10 w-24 rounded-lg bg-gray-200" />
          </div>

          {/* Meta */}

          <div className="mb-5 grid grid-cols-2 gap-4">
            <div className="h-4 rounded bg-gray-200" />
            <div className="h-4 rounded bg-gray-200" />
            <div className="h-4 rounded bg-gray-200" />
            <div className="h-4 rounded bg-gray-200" />
          </div>

          {/* Salary */}

          <div className="mb-5 h-12 rounded-lg bg-gray-200" />

          {/* Skills */}

          <div className="mb-5 flex gap-2">
            <div className="h-8 w-20 rounded-full bg-gray-200" />
            <div className="h-8 w-20 rounded-full bg-gray-200" />
            <div className="h-8 w-20 rounded-full bg-gray-200" />
            <div className="h-8 w-16 rounded-full bg-gray-200" />
          </div>

          {/* Footer */}

          <div className="flex items-center justify-between border-t border-gray-100 pt-5">
            <div className="h-4 w-28 rounded bg-gray-200" />

            <div className="flex gap-3">
              <div className="h-10 w-28 rounded-lg bg-gray-200" />
              <div className="h-10 w-28 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingJobs;
