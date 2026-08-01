import { ArrowRight, CheckCircle2, Circle, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileCompletionCard = ({
  percentage = 0,
  completedSections = [],
  pendingSections = [],
}) => {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
          <UserRound size={24} className="text-blue-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Profile Completion
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            A complete profile improves recruiter visibility.
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Completion</span>

          <span className="text-sm font-bold text-blue-600">{percentage}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>

      {/* Checklist */}

      <div className="mt-8 space-y-4">
        {completedSections.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-600" />

            <span className="text-sm font-medium text-gray-800">{item}</span>
          </div>
        ))}

        {pendingSections.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <Circle size={20} className="text-gray-400" />

            <span className="text-sm font-medium text-gray-500">{item}</span>
          </div>
        ))}
      </div>

      {/* Footer */}

      <Link
        to="/applicant/profile"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
      >
        Complete Profile
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
};

export default ProfileCompletionCard;
