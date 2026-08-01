import { CircleCheckBig } from "lucide-react";

const JobRequirements = ({ job }) => {
  if (!job.requirements?.length) {
    return null;
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Requirements
      </h2>

      <ul className="space-y-4">
        {job.requirements.map((requirement, index) => (
          <li key={index} className="flex items-start gap-3">
            <CircleCheckBig
              size={20}
              className="mt-1 flex-shrink-0 text-blue-600"
            />

            <p className="leading-7 text-gray-700">{requirement}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobRequirements;
