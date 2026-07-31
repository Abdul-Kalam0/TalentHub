const JobStats = ({ jobs }) => {
  const totalJobs = jobs.length;

  const activeJobs = jobs.filter((job) => !job.isArchived).length;

  const archivedJobs = jobs.filter((job) => job.isArchived).length;

  const stats = [
    {
      title: "Total Jobs",
      value: totalJobs,
      icon: "💼",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Active Jobs",
      value: activeJobs,
      icon: "🟢",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Archived Jobs",
      value: archivedJobs,
      icon: "📦",
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

export default JobStats;
