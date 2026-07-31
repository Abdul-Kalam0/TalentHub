import {
  FileText,
  Eye,
  BadgeCheck,
  XCircle,
  Trophy,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    title: "Total Applications",
    value: 18,
    icon: BriefcaseBusiness,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Applied",
    value: 8,
    icon: FileText,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Reviewed",
    value: 4,
    icon: Eye,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Shortlisted",
    value: 3,
    icon: BadgeCheck,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Rejected",
    value: 2,
    icon: XCircle,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Hired",
    value: 1,
    icon: Trophy,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const StatsCards = () => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.bgColor}`}
              >
                <Icon className={stat.iconColor} size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsCards;
