const LoadingDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}

      <section className="mb-10">
        <div className="h-9 w-72 rounded-lg bg-gray-200" />

        <div className="mt-4 h-5 w-full max-w-lg rounded-lg bg-gray-200" />
      </section>

      {/* Statistics */}

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="h-4 w-24 rounded bg-gray-200" />

                <div className="mt-5 h-10 w-16 rounded bg-gray-200" />

                <div className="mt-5 h-7 w-28 rounded-full bg-gray-200" />
              </div>

              <div className="h-16 w-16 rounded-2xl bg-gray-200" />
            </div>
          </div>
        ))}
      </section>

      {/* Main Content */}

      <section className="mt-10 grid gap-8 xl:grid-cols-12">
        {/* Recent Applications */}

        <div className="xl:col-span-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Header */}

            <div className="flex items-center justify-between">
              <div>
                <div className="h-6 w-56 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-72 rounded bg-gray-200" />
              </div>

              <div className="h-5 w-28 rounded bg-gray-200" />
            </div>

            {/* Applications */}

            <div className="mt-8 space-y-5">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-full bg-gray-200" />

                      <div>
                        <div className="h-5 w-40 rounded bg-gray-200" />

                        <div className="mt-3 h-4 w-32 rounded bg-gray-200" />

                        <div className="mt-3 h-4 w-24 rounded bg-gray-200" />
                      </div>
                    </div>

                    <div className="h-8 w-24 rounded-full bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}

            <div className="mt-8 flex justify-center">
              <div className="h-5 w-40 rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="xl:col-span-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-7 w-40 rounded bg-gray-200" />

            <div className="mt-3 h-4 w-56 rounded bg-gray-200" />

            <div className="mt-8 space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gray-200" />

                    <div>
                      <div className="h-5 w-32 rounded bg-gray-200" />

                      <div className="mt-3 h-4 w-40 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="h-5 w-5 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingDashboard;
