import { CheckCircle2 } from "lucide-react";

const JobResponsibilities = ({ job }) => {
  if (!job.responsibilities?.length) {
    return null;
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Responsibilities
      </h2>

      <ul className="space-y-4">
        {job.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="mt-1 flex-shrink-0 text-green-600"
            />

            <p className="leading-7 text-gray-700">{responsibility}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobResponsibilities;
