import { Bot } from "lucide-react";

const AILoading = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 px-6 py-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
        <Bot size={30} className="animate-pulse" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-gray-900">
        AI is analyzing applicants...
      </h3>

      <p className="mt-2 max-w-sm text-center text-sm leading-6 text-gray-500">
        Comparing applicant skills, experience, and job requirements to generate
        recommendations.
      </p>

      {/* Loading Bars */}

      <div className="mt-8 w-full max-w-md space-y-3">
        <div className="h-3 w-full animate-pulse rounded-full bg-blue-200" />

        <div className="h-3 w-5/6 animate-pulse rounded-full bg-blue-200" />

        <div className="h-3 w-2/3 animate-pulse rounded-full bg-blue-200" />
      </div>
    </div>
  );
};

export default AILoading;
