import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Create Job",
      description: "Post a new job opening.",
      icon: "➕",
      color: "bg-blue-100",
      path: "/recruiter/jobs/create",
    },
    {
      title: "Manage Jobs",
      description: "View and manage all job postings.",
      icon: "💼",
      color: "bg-green-100",
      path: "/recruiter/jobs",
    },
    {
      title: "Company Profile",
      description: "Update your company information.",
      icon: "🏢",
      color: "bg-purple-100",
      path: "/recruiter/profile",
    },
  ];

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-gray-900">
        Quick Actions
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Frequently used recruiter actions.
      </p>

      <div className="space-y-4">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg text-2xl ${action.color}`}
            >
              {action.icon}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">{action.title}</h3>

              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
