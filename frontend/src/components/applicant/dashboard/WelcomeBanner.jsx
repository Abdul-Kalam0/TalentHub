import { BriefcaseBusiness, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

const WelcomeBanner = () => {
  const { user } = useAuth();

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.fullName}! 👋
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Ready to take the next step in your career? Explore new
            opportunities tailored to your skills and start applying today.
          </p>

          {/* Progress */}
          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Profile Completion
              </span>

              <span className="text-sm font-semibold text-blue-600">80%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-4/5 rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <Link
            to="/applicant/jobs"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <BriefcaseBusiness size={20} />
            Browse Jobs
          </Link>

          <Link
            to="/applicant/profile"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <UserRound size={20} />
            Complete Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
