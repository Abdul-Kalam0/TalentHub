import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Building2, MapPin } from "lucide-react";

const SimilarJobs = ({ jobs = [] }) => {
  if (!jobs.length) {
    return null;
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">Similar Jobs</h2>

      <div className="space-y-4">
        {jobs.slice(0, 4).map((job) => (
          <Link
            key={job._id}
            to={`/applicant/jobs/${job._id}`}
            className="block rounded-lg border border-gray-200 p-4 transition hover:border-blue-500 hover:shadow-sm"
          >
            <div className="flex gap-3">
              {/* Logo */}

              {job.recruiter?.companyLogo ? (
                <img
                  src={job.recruiter.companyLogo}
                  alt={job.recruiter.companyName}
                  className="h-12 w-12 rounded-lg border border-gray-200 object-cover"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <Building2 size={22} className="text-gray-500" />
                </div>
              )}

              {/* Information */}

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-900">
                  {job.title}
                </h3>

                <p className="mt-1 truncate text-sm text-gray-600">
                  {job.recruiter?.companyName}
                </p>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />

                    {job.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <BriefcaseBusiness size={14} />

                    {job.employmentType}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600">
                  View Job
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarJobs;
