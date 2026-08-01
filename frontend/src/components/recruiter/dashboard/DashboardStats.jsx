import {
  BriefcaseBusiness,
  FileText,
  UserCheck,
  Trophy,
  TrendingUp,
} from "lucide-react";

const DashboardStats = ({ dashboard }) => {
  const stats = [
    {
      title: "Active Jobs",
      value: dashboard.activeJobs,
      icon: BriefcaseBusiness,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      valueColor: "text-blue-600",
    },
    {
      title: "Applications",
      value: dashboard.totalApplications,
      icon: FileText,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      valueColor: "text-emerald-600",
    },
    {
      title: "Shortlisted",
      value: dashboard.shortlisted,
      icon: UserCheck,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      valueColor: "text-amber-600",
    },
    {
      title: "Hired",
      value: dashboard.hired,
      icon: Trophy,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      valueColor: "text-violet-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              {/* Left */}

              <div className="space-y-4">
                <p className="text-sm font-medium tracking-wide text-gray-500">
                  {stat.title}
                </p>

                <h2 className={`text-4xl font-bold ${stat.valueColor}`}>
                  {stat.value}
                </h2>

                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  <TrendingUp size={14} />
                  Live Statistics
                </div>
              </div>

              {/* Right */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.iconBg} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={30} className={stat.iconColor} />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default DashboardStats;
