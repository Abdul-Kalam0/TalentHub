import { Link } from "react-router-dom";
import { ArrowLeft, Home, SearchX } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        {/* Icon */}

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 shadow-lg">
          <SearchX size={56} className="text-blue-600" />
        </div>

        {/* 404 */}

        <h1 className="mt-10 text-7xl font-extrabold tracking-tight text-gray-900 sm:text-8xl">
          404
        </h1>

        {/* Title */}

        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
          Sorry, the page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        {/* Actions */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-300
              bg-white
              px-6
              py-3
              font-semibold
              text-gray-700
              transition-all
              duration-300
              hover:border-blue-600
              hover:text-blue-600
              hover:shadow-md
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer */}

        <p className="mt-12 text-sm text-gray-400">
          TalentHub • AI Powered Hiring Platform
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
