import { BriefcaseBusiness, IndianRupee, MapPin, Sparkles } from "lucide-react";

const MetaItem = ({
  icon: Icon,
  label,
  value,
  valueClass = "text-gray-900",
}) => (
  <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-colors duration-200 hover:bg-blue-50">
    <div className="mt-0.5 rounded-lg bg-blue-100 p-2">
      <Icon size={18} className="text-blue-600" />
    </div>

    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className={`mt-1 truncate text-sm font-semibold ${valueClass}`}>
        {value}
      </p>
    </div>
  </div>
);

const AppliedJobMeta = ({ application }) => {
  const { job } = application;

  return (
    <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <MetaItem icon={MapPin} label="Location" value={job.location} />

      <MetaItem
        icon={BriefcaseBusiness}
        label="Employment"
        value={job.employmentType}
      />

      <MetaItem icon={Sparkles} label="Experience" value={job.experience} />

      <MetaItem
        icon={IndianRupee}
        label="Salary"
        value={`₹${job.salary.min.toLocaleString()} - ₹${job.salary.max.toLocaleString()}`}
        valueClass="text-green-600"
      />
    </section>
  );
};

export default AppliedJobMeta;
