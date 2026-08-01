import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Apply to Jobs",
    description: "Browse the latest opportunities.",
    icon: BriefcaseBusiness,
    to: "/applicant/jobs",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    hover: "group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    title: "My Applications",
    description: "Track all your submitted applications.",
    icon: FileText,
    to: "/applicant/applied-jobs",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hover: "group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    title: "Update Profile",
    description: "Increase your recruiter visibility.",
    icon: UserRound,
    to: "/applicant/profile",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    hover: "group-hover:bg-violet-600 group-hover:text-white",
  },
];

const QuickActions = () => {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>

        <p className="mt-1 text-sm text-gray-500">
          Everything you need is just one click away.
        </p>
      </div>

      {/* Actions */}

      <div className="grid gap-4 md:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="group rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              {/* Icon */}

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.bg} transition-all duration-300 ${action.hover}`}
              >
                <Icon
                  size={26}
                  className={`transition-colors duration-300 ${action.iconColor} group-hover:text-white`}
                />
              </div>

              {/* Content */}

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {action.description}
              </p>

              {/* Footer */}

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3">
                Continue
                <ArrowRight size={16} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;
