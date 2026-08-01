import { BriefcaseBusiness } from "lucide-react";

const EmptyJobs = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-8 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <BriefcaseBusiness size={40} className="text-blue-600" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900">No Jobs Found</h2>

      <p className="mt-3 max-w-md text-gray-600">
        We couldn't find any jobs matching your search or selected filters. Try
        adjusting your filters or resetting them to discover more opportunities.
      </p>
    </div>
  );
};

export default EmptyJobs;
