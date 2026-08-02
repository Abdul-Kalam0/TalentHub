const Skeleton = ({ className = "" }) => {
  return (
    <div className={`animate-pulse rounded-xl bg-gray-200 ${className}`} />
  );
};

const BookmarkCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 p-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-2xl" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-52" />

            <Skeleton className="h-4 w-36" />
          </div>
        </div>

        <Skeleton className="h-10 w-10 rounded-xl" />
      </div>

      {/* Body */}

      <div className="space-y-5 p-6">
        {/* Details */}

        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-4 w-32" />

          <Skeleton className="h-4 w-28" />

          <Skeleton className="h-4 w-24" />

          <Skeleton className="h-4 w-28" />
        </div>

        {/* Experience */}

        <Skeleton className="h-9 w-36 rounded-xl" />

        {/* Skills */}

        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-20 rounded-full" />

          <Skeleton className="h-8 w-24 rounded-full" />

          <Skeleton className="h-8 w-16 rounded-full" />

          <Skeleton className="h-8 w-28 rounded-full" />
        </div>

        {/* Footer */}

        <div className="flex justify-between border-t border-gray-100 pt-5">
          <Skeleton className="h-4 w-28" />

          <Skeleton className="h-4 w-24" />
        </div>

        {/* Buttons */}

        <div className="flex gap-3">
          <Skeleton className="h-12 flex-1 rounded-2xl" />

          <Skeleton className="h-12 flex-1 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

const LoadingBookmarks = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <Skeleton className="h-14 w-14 rounded-2xl" />

            <div className="space-y-3">
              <Skeleton className="h-8 w-72" />

              <Skeleton className="h-4 w-[420px] max-w-full" />

              <Skeleton className="h-4 w-[320px] max-w-full" />
            </div>
          </div>

          <Skeleton className="h-20 w-44 rounded-2xl" />
        </div>
      </section>

      {/* Cards */}

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <BookmarkCardSkeleton key={index} />
        ))}
      </section>
    </div>
  );
};

export default LoadingBookmarks;
