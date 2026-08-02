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
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>

              <h3
                className={`mt-2 text-3xl font-bold sm:text-4xl ${stat.color}`}
              >
                {stat.value}
              </h3>
            </div>

            <div
              className={`
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                text-2xl
                ${stat.bg}
              `}
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
