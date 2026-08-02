import {
  BriefcaseBusiness,
  Building2,
  IndianRupee,
  MapPin,
  Monitor,
  Star,
} from "lucide-react";

const JobHero = ({ job }) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {/* Company Logo */}

        {job.recruiter?.companyLogo ? (
          <img
            src={job.recruiter.companyLogo}
            alt={job.recruiter.companyName}
            className="h-24 w-24 rounded-xl border border-gray-200 object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-100">
            <Building2 size={42} className="text-gray-500" />
          </div>
        )}

        {/* Job Information */}

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900">{job.title}</h1>

          <p className="mt-2 text-2xl text-gray-600">
            {job.recruiter?.companyName}
          </p>

          {/* Meta */}

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-600" />

              <span>{job.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={20} className="text-blue-600" />

              <span>{job.employmentType}</span>
            </div>

            <div className="flex items-center gap-2">
              <Monitor size={20} className="text-blue-600" />

              <span>{job.workplaceType}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={20} className="text-blue-600" />

              <span>{job.experience}</span>
            </div>
          </div>

          {/* Salary */}

          <div className="mt-6 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 w-fit">
            <IndianRupee size={20} className="shrink-0 text-green-600" />

            <p className="text-lg font-semibold text-green-700 md:text-xl">
              {job.salary.min.toLocaleString()} -{" "}
              {job.salary.max.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobHero;
