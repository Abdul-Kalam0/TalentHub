import { ExternalLink, FileText } from "lucide-react";

const ApplicantActions = ({ application }) => {
  const resume = application.applicant.resume;

  return (
    <div>
      {resume ? (
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
        >
          <FileText size={18} />
          View Resume
          <ExternalLink size={16} />
        </a>
      ) : (
        <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-medium text-gray-500">
          <FileText size={18} />
          Resume Not Available
        </div>
      )}
    </div>
  );
};

export default ApplicantActions;
