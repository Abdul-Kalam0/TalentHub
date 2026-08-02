const LoadingJobs = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            sm:p-6
          "
        >
          {/* Header */}

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="h-6 w-3/4 rounded-lg bg-gray-200" />

              <div className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200" />
            </div>

            <div className="h-7 w-24 rounded-full bg-gray-200" />
          </div>

          {/* Details */}

          <div className="space-y-4">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4"
              >
                <div className="h-4 w-24 rounded bg-gray-200" />

                <div className="h-4 w-32 rounded bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-6 grid grid-cols-2 gap-3 lg:flex lg:flex-wrap">
            <div className="h-11 rounded-xl bg-gray-200 lg:w-40" />

            <div className="h-11 rounded-xl bg-gray-200 lg:w-24" />

            <div className="h-11 rounded-xl bg-gray-200 lg:w-28" />

            <div className="h-11 rounded-xl bg-gray-200 lg:w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingJobs;
