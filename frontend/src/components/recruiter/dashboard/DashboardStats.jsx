const DashboardStats = ({ dashboard }) => {
  const stats = [
    {
      title: "Active Jobs",
      value: dashboard.activeJobs,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: "💼",
    },
    {
      title: "Applications",
      value: dashboard.totalApplications,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: "📄",
    },
    {
      title: "Shortlisted",
      value: dashboard.shortlisted,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: "⭐",
    },
    {
      title: "Hired",
      value: dashboard.hired,
      color: "text-purple-600",
      bg: "bg-purple-100",
      icon: "🎉",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>

              <h3 className={`mt-2 text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </h3>
            </div>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${stat.bg}`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
