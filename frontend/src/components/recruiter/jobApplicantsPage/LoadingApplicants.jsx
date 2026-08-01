const LoadingApplicants = () => {
  return (
    <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          {/* Header */}

          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200" />

            <div className="flex-1 space-y-3">
              <div className="h-5 w-1/2 rounded bg-gray-200" />

              <div className="h-4 w-2/3 rounded bg-gray-200" />

              <div className="h-6 w-28 rounded-full bg-gray-200" />
            </div>
          </div>

          {/* Skills */}

          <div className="mt-6">
            <div className="mb-3 h-4 w-20 rounded bg-gray-200" />

            <div className="flex flex-wrap gap-2">
              <div className="h-8 w-20 rounded-full bg-gray-200" />
              <div className="h-8 w-24 rounded-full bg-gray-200" />
              <div className="h-8 w-28 rounded-full bg-gray-200" />
              <div className="h-8 w-16 rounded-full bg-gray-200" />
            </div>
          </div>

          {/* Footer */}

          <div className="mt-6 border-t border-gray-100 pt-5">
            <div className="mb-5">
              <div className="mb-2 h-4 w-36 rounded bg-gray-200" />

              <div className="h-12 w-full rounded-lg bg-gray-200" />
            </div>

            <div className="h-11 w-full rounded-lg bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingApplicants;
