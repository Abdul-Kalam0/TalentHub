import { BriefcaseBusiness, Search } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyApplications = () => {
  return (
    <section className="flex min-h-[500px] items-center justify-center">
      <div className="w-full max-w-2xl rounded-3xl border border-dashed border-gray-300 bg-white px-8 py-16 text-center shadow-sm">
        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
          <BriefcaseBusiness size={46} className="text-blue-600" />
        </div>

        {/* Heading */}

        <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
          No Applications Yet
        </h2>

        {/* Description */}

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-500">
          You haven't applied for any jobs yet. Browse thousands of
          opportunities and start building your career today.
        </p>

        {/* CTA */}

        <Link
          to="/applicant/jobs"
          className="
            mt-10 inline-flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-blue-700
            hover:shadow-lg
            active:scale-[0.98]
          "
        >
          <Search size={18} />
          Browse Jobs
        </Link>
      </div>
    </section>
  );
};

export default EmptyApplications;
