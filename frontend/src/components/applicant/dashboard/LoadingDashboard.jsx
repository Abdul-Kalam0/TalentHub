const SkeletonCard = ({ children, className = "" }) => {
  return (
    <div
      className={`animate-pulse rounded-3xl border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

const LoadingDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top */}

      <section className="grid gap-8 lg:grid-cols-12">
        {/* Left */}

        <div className="lg:col-span-4">
          <SkeletonCard className="overflow-hidden">
            <div className="h-28 bg-gray-200" />

            <div className="px-6 pb-6 pt-16">
              <div className="-mt-20 flex justify-center">
                <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200" />
              </div>

              <div className="mx-auto mt-6 h-6 w-40 rounded bg-gray-200" />

              <div className="mx-auto mt-3 h-4 w-24 rounded bg-gray-200" />

              <div className="mt-8">
                <div className="mb-3 flex justify-between">
                  <div className="h-4 w-32 rounded bg-gray-200" />

                  <div className="h-4 w-10 rounded bg-gray-200" />
                </div>

                <div className="h-3 rounded-full bg-gray-200" />

                <div className="mt-4 h-4 rounded bg-gray-200" />

                <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />
              </div>

              <div className="mt-8 h-12 rounded-2xl bg-gray-200" />
            </div>
          </SkeletonCard>
        </div>

        {/* Right */}

        <div className="space-y-6 lg:col-span-8">
          <SkeletonCard className="p-8">
            <div className="h-8 w-44 rounded bg-gray-200" />

            <div className="mt-6 h-10 w-72 rounded bg-gray-200" />

            <div className="mt-5 h-5 w-full rounded bg-gray-200" />

            <div className="mt-3 h-5 w-3/4 rounded bg-gray-200" />
          </SkeletonCard>

          <SkeletonCard className="p-6">
            <div className="h-6 w-40 rounded bg-gray-200" />

            <div className="mt-3 h-4 w-56 rounded bg-gray-200" />

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-100 p-5"
                >
                  <div className="h-14 w-14 rounded-2xl bg-gray-200" />

                  <div className="mt-5 h-5 w-36 rounded bg-gray-200" />

                  <div className="mt-3 h-4 rounded bg-gray-200" />

                  <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />

                  <div className="mt-6 h-4 w-24 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </SkeletonCard>
        </div>
      </section>

      {/* Recent Applications */}

      <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div>
            <div className="h-7 w-56 rounded bg-gray-200" />

            <div className="mt-3 h-4 w-44 rounded bg-gray-200" />
          </div>

          <div className="h-5 w-24 rounded bg-gray-200" />
        </div>

        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex flex-col gap-6 border-b border-gray-100 p-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gray-200" />

              <div>
                <div className="h-5 w-56 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-40 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-32 rounded bg-gray-200" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="ml-auto h-7 w-28 rounded-full bg-gray-200" />

              <div className="h-4 w-24 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LoadingDashboard;
