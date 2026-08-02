import {
  BriefcaseBusiness,
  IndianRupee,
  MapPin,
  Monitor,
  Star,
} from "lucide-react";

import JobSkills from "./JobSkills";

const JobCardBody = ({ job }) => {
  return (
    <div className="flex flex-1 flex-col p-5">
      {/* Job Information */}

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin size={18} className="text-gray-500" />

          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <BriefcaseBusiness size={18} className="text-gray-500" />

          <span>{job.employmentType}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Monitor size={18} className="text-gray-500" />

          <span>{job.workplaceType}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Star size={18} className="text-gray-500" />

          <span>{job.experience}</span>
        </div>
      </div>

      {/* Salary */}

      <div className="mt-5 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3">
        <IndianRupee size={18} className="text-green-600" />

        <span className="text-lg font-semibold text-green-700">
          ₹{job.salary.min.toLocaleString()} - ₹
          {job.salary.max.toLocaleString()}
        </span>
      </div>

      {/* Skills */}

      <div className="mt-6 flex-1">
        <JobSkills skills={job.skills} />
      </div>
    </div>
  );
};

export default JobCardBody;
