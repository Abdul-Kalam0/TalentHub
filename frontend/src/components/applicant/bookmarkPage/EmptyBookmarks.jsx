import { BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyBookmarks = () => {
  return (
    <section className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 shadow-sm">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        {/* Icon */}

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <BookmarkPlus size={38} className="text-blue-600" />
        </div>

        {/* Heading */}

        <h2 className="mt-8 text-3xl font-bold text-gray-900">
          No bookmarked jobs yet
        </h2>

        {/* Description */}

        <p className="mt-4 text-base leading-7 text-gray-500">
          Save interesting jobs while browsing and they'll appear here, making
          it easy to compare opportunities and apply later.
        </p>

        {/* CTA */}

        <Link
          to="/applicant/jobs"
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            rounded-2xl
            bg-blue-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          Browse Jobs
        </Link>
      </div>
    </section>
  );
};

export default EmptyBookmarks;
