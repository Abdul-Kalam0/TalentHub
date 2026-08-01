import {
  BriefcaseBusiness,
  CalendarDays,
  IndianRupee,
  MapPin,
  Monitor,
  Star,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const JobOverview = ({ job }) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Job Overview
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Location */}

        <div className="flex items-start gap-3">
          <MapPin size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Location</p>

            <p className="font-medium text-gray-900">{job.location}</p>
          </div>
        </div>

        {/* Employment */}

        <div className="flex items-start gap-3">
          <BriefcaseBusiness size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Employment Type</p>

            <p className="font-medium text-gray-900">{job.employmentType}</p>
          </div>
        </div>

        {/* Workplace */}

        <div className="flex items-start gap-3">
          <Monitor size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Workplace Type</p>

            <p className="font-medium text-gray-900">{job.workplaceType}</p>
          </div>
        </div>

        {/* Experience */}

        <div className="flex items-start gap-3">
          <Star size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Experience</p>

            <p className="font-medium text-gray-900">{job.experience}</p>
          </div>
        </div>

        {/* Salary */}

        <div className="flex items-start gap-3">
          <IndianRupee size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Salary</p>

            <p className="font-medium text-gray-900">
              ₹{job.salary.min.toLocaleString()} - ₹
              {job.salary.max.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Posted */}

        <div className="flex items-start gap-3">
          <CalendarDays size={22} className="mt-1 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Posted</p>

            <p className="font-medium text-gray-900">
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOverview;
