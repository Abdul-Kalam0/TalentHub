import { ArrowRight, BriefcaseBusiness, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyDashboard = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-3xl rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
          <BriefcaseBusiness size={42} className="text-blue-600" />
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Welcome to TalentHub 👋
        </h1>

        {/* Description */}

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Your dashboard will come to life as you complete your profile and
          start applying for jobs. Let's begin your career journey.
        </p>

        {/* CTA Buttons */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/applicant/profile"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            <UserRound size={18} />
            Complete Profile
          </Link>

          <Link
            to="/applicant/jobs"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50"
          >
            <BriefcaseBusiness size={18} />
            Apply to Jobs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmptyDashboard;
