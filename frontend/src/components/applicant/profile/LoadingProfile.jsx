const LoadingProfile = () => {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-6 py-8">
      {/* Page Header */}

      <div className="mb-10">
        <div className="h-10 w-56 rounded-xl bg-gray-200" />

        <div className="mt-3 h-5 w-96 rounded-lg bg-gray-200" />
      </div>

      <div className="space-y-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
        {/* Photo */}

        <section>
          <div className="mb-6 h-7 w-40 rounded-lg bg-gray-200" />

          <div className="rounded-2xl border border-gray-200 p-7">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <div className="h-32 w-32 rounded-full bg-gray-200" />

                <div>
                  <div className="h-6 w-40 rounded bg-gray-200" />

                  <div className="mt-3 h-4 w-72 rounded bg-gray-200" />

                  <div className="mt-2 h-4 w-56 rounded bg-gray-200" />
                </div>
              </div>

              <div>
                <div className="h-12 w-40 rounded-xl bg-gray-200" />

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

          <div className="mb-6 flex gap-3">
            <div className="h-12 flex-1 rounded-xl bg-gray-200" />

            <div className="h-12 w-32 rounded-xl bg-gray-200" />
          </div>

          <div className="flex flex-wrap gap-3">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="h-10 w-24 rounded-full bg-gray-200" />
            ))}
          </div>
        </section>

        {/* Projects */}

        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="h-7 w-36 rounded bg-gray-200" />

              <div className="mt-2 h-4 w-60 rounded bg-gray-200" />
            </div>

            <div className="h-11 w-36 rounded-xl bg-gray-200" />
          </div>

          <div className="rounded-2xl border border-gray-200 p-7">
            <div className="mb-6 flex justify-between">
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

          <div className="rounded-2xl border border-gray-200 p-7">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="h-6 w-48 rounded bg-gray-200" />

                <div className="mt-3 h-4 w-72 rounded bg-gray-200" />

                <div className="mt-2 h-4 w-48 rounded bg-gray-200" />
              </div>

              <div>
                <div className="h-12 w-40 rounded-xl bg-gray-200" />

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
          <div className="flex items-center justify-between">
            <div>
              <div className="h-6 w-52 rounded bg-gray-200" />

              <div className="mt-2 h-4 w-72 rounded bg-gray-200" />
            </div>

            <div className="h-12 w-44 rounded-xl bg-gray-200" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingProfile;
