const LoadingDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <div className="h-8 w-64 rounded bg-gray-200"></div>

        <div className="mt-3 h-4 w-96 rounded bg-gray-200"></div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="h-4 w-24 rounded bg-gray-200"></div>

                <div className="mt-4 h-8 w-16 rounded bg-gray-200"></div>
              </div>

              <div className="h-14 w-14 rounded-full bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Recent Applications */}

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6">
            <div className="h-6 w-52 rounded bg-gray-200"></div>

            <div className="mt-2 h-4 w-72 rounded bg-gray-200"></div>
          </div>

          <div className="space-y-5">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gray-200"></div>

                  <div>
                    <div className="h-5 w-40 rounded bg-gray-200"></div>

                    <div className="mt-2 h-4 w-32 rounded bg-gray-200"></div>

                    <div className="mt-2 h-3 w-24 rounded bg-gray-200"></div>
                  </div>
                </div>

                <div className="h-8 w-24 rounded-full bg-gray-200"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="h-6 w-40 rounded bg-gray-200"></div>

          <div className="mt-2 h-4 w-48 rounded bg-gray-200"></div>

          <div className="mt-6 space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-gray-200 p-4"
              >
                <div className="h-12 w-12 rounded-lg bg-gray-200"></div>

                <div className="flex-1">
                  <div className="h-5 w-28 rounded bg-gray-200"></div>

                  <div className="mt-2 h-4 w-40 rounded bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingDashboard;
