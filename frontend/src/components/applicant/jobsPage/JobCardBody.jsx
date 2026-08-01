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
    <div className="space-y-5 p-5">
      {/* Job Information */}

      <div className="grid grid-cols-2 gap-4">
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

      <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3">
        <IndianRupee size={18} className="text-green-600" />

        <span className="font-medium text-green-700">
          ₹{job.salary.min.toLocaleString()} - ₹
          {job.salary.max.toLocaleString()}
        </span>
      </div>

      {/* Skills */}

      <JobSkills skills={job.skills} />
    </div>
  );
};

export default JobCardBody;
