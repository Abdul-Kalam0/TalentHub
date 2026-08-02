const LoadingProfile = () => {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-6 sm:px-6 sm:py-8">
      {/* Page Header */}

      <div className="mb-8 sm:mb-10">
        <div className="h-8 w-44 rounded-xl bg-gray-200 sm:h-10 sm:w-56" />

        <div className="mt-3 h-5 w-full max-w-md rounded-lg bg-gray-200" />
      </div>

      <div className="space-y-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:space-y-10 sm:p-8 lg:p-10">
        {/* Photo */}

        <section>
          <div className="mb-6 h-7 w-40 rounded-lg bg-gray-200" />

          <div className="rounded-2xl border border-gray-200 p-5 sm:p-7">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="h-24 w-24 rounded-full bg-gray-200 sm:h-32 sm:w-32" />

                <div>
                  <div className="h-6 w-40 rounded bg-gray-200" />

                  <div className="mt-3 h-4 w-52 rounded bg-gray-200 sm:w-72" />

                  <div className="mt-2 h-4 w-44 rounded bg-gray-200 sm:w-56" />
                </div>
              </div>

              <div className="w-full text-center md:w-auto md:text-right">
                <div className="h-12 w-full rounded-xl bg-gray-200 md:w-40" />

                <div className="mx-auto mt-3 h-3 w-36 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Personal */}

        <section>
          <div className="mb-6 h-7 w-52 rounded-lg bg-gray-200" />

          <div className="grid gap-7 md:grid-cols-2">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <div className="mb-2 h-4 w-28 rounded bg-gray-200" />

                <div className="h-12 rounded-xl bg-gray-200" />
              </div>
            ))}
          </div>
        </section>

        {/* Professional */}

        <section>
          <div className="mb-6 h-7 w-60 rounded-lg bg-gray-200" />

          <div className="grid gap-7 md:grid-cols-2">
            <div className="md:col-span-2">
              <div className="mb-2 h-4 w-32 rounded bg-gray-200" />

              <div className="h-12 rounded-xl bg-gray-200" />
            </div>

            {[...Array(2)].map((_, index) => (
              <div key={index}>
                <div className="mb-2 h-4 w-28 rounded bg-gray-200" />

                <div className="h-12 rounded-xl bg-gray-200" />
              </div>
            ))}

            <div className="md:col-span-2">
              <div className="mb-2 h-4 w-24 rounded bg-gray-200" />

              <div className="h-40 rounded-2xl bg-gray-200" />
            </div>
          </div>
        </section>
        {/* Skills */}

        <section>
          <div className="mb-6 h-7 w-32 rounded-lg bg-gray-200" />

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 flex-1 rounded-xl bg-gray-200" />

            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-32" />
          </div>

          <div className="flex flex-wrap gap-3">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-10 w-20 rounded-full bg-gray-200 sm:w-24"
              />
            ))}
          </div>
        </section>

        {/* Projects */}

        <section>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="h-7 w-36 rounded bg-gray-200" />

              <div className="mt-2 h-4 w-52 rounded bg-gray-200 sm:w-60" />
            </div>

            <div className="h-11 w-full rounded-xl bg-gray-200 sm:w-36" />
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div className="h-6 w-32 rounded bg-gray-200" />

              <div className="h-10 w-10 rounded-lg bg-gray-200" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(5)].map((_, index) => (
                <div key={index} className={index < 3 ? "md:col-span-2" : ""}>
                  <div className="mb-2 h-4 w-28 rounded bg-gray-200" />

                  <div
                    className={`rounded-xl bg-gray-200 ${
                      index === 1 ? "h-28" : "h-12"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Resume */}

        <section>
          <div className="mb-6 h-7 w-32 rounded-lg bg-gray-200" />

          <div className="rounded-2xl border border-gray-200 p-5 sm:p-7">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="h-6 w-48 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-full max-w-sm rounded bg-gray-200" />

                <div className="mt-2 h-4 w-48 rounded bg-gray-200" />
              </div>

              <div className="w-full text-center md:w-auto md:text-right">
                <div className="h-12 w-full rounded-xl bg-gray-200 md:w-40" />

                <div className="mx-auto mt-3 h-3 w-32 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Social */}

        <section>
          <div className="mb-6 h-7 w-40 rounded-lg bg-gray-200" />

          <div className="grid gap-7 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <div className="mb-2 h-4 w-28 rounded bg-gray-200" />

                <div className="h-12 rounded-xl bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mt-6 h-20 rounded-2xl bg-gray-200" />
        </section>

        {/* Save */}

        <section className="border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="h-6 w-52 rounded bg-gray-200" />

              <div className="mt-2 h-4 w-full max-w-xs rounded bg-gray-200 sm:max-w-sm" />
            </div>

            <div className="h-12 w-full rounded-xl bg-gray-200 md:w-44" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingProfile;
