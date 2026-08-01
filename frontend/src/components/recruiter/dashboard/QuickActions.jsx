import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CirclePlus,
} from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Create Job",
      description: "Post a new job opening and start receiving applications.",
      icon: CirclePlus,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      path: "/recruiter/jobs/create",
    },
    {
      title: "Manage Jobs",
      description: "View, edit, archive, and manage your job postings.",
      icon: BriefcaseBusiness,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      path: "/recruiter/jobs",
    },
    {
      title: "Company Profile",
      description: "Keep your company profile and branding up to date.",
      icon: Building2,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      path: "/recruiter/profile",
    },
  ];

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Access your most frequently used recruiter tools.
        </p>
      </div>

      {/* Actions */}

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="group flex w-full items-center justify-between rounded-2xl border border-gray-200 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
            >
              {/* Left */}

              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.iconBg}`}
                >
                  <Icon size={28} className={action.iconColor} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-900">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {action.description}
                  </p>
                </div>
              </div>

              {/* Right */}

              <ArrowRight
                size={20}
                className="shrink-0 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;
