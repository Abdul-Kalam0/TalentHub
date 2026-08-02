import { UserRound, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyProfile = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex min-h-[70vh] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-10 py-20 text-center shadow-sm">
        {/* Icon */}

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
          <UserRound size={42} className="text-blue-600" />
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
          Your Profile Isn't Ready Yet
        </h1>

        {/* Description */}

        <p className="mt-4 max-w-2xl text-base leading-8 text-gray-500">
          We couldn't find your applicant profile. Complete your profile to
          showcase your skills, projects, resume, and professional experience. A
          complete profile helps recruiters discover you faster and increases
          your chances of getting shortlisted.
        </p>

        {/* Features */}

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Showcase Your Skills
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Add technical skills so recruiters can easily match you with
              relevant job opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Highlight Your Projects
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Demonstrate your practical experience by adding your best
              development projects.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Upload Your Resume</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Let recruiters download your latest resume with a single click.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Increase Visibility</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Complete profiles receive more recruiter attention and better job
              recommendations.
            </p>
          </div>
        </div>

        {/* Action */}

        <Link
          to="/applicant/dashboard"
          className="
            mt-12
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-8
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:bg-blue-700
            hover:shadow-md
          "
        >
          Go to Dashboard
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default EmptyProfile;
