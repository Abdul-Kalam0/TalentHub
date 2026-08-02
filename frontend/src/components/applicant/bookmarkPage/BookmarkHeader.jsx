import { Bookmark } from "lucide-react";

const BookmarkHeader = ({ totalBookmarks }) => {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}

        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <Bookmark className="h-7 w-7 text-blue-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Bookmarked Jobs
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Access all the jobs you've saved in one place. Review
              opportunities, compare positions, and apply whenever you're ready.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
            <Bookmark className="h-6 w-6 text-white" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Saved Jobs
            </p>

            <h2 className="text-2xl font-bold text-blue-600">
              {totalBookmarks}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookmarkHeader;
