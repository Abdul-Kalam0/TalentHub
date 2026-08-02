import {
  Building2,
  MapPin,
  BriefcaseBusiness,
  Laptop,
  IndianRupee,
  Clock3,
  Heart,
  ArrowUpRight,
  CircleCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteBookmark } from "../../../redux/bookmarks/bookmarksThunks";

const BookmarkCard = ({ bookmark }) => {
  const dispatch = useDispatch();

  const {
    _id,
    createdAt,
    isApplied,
    job: {
      _id: jobId,
      title,
      location,
      employmentType,
      workplaceType,
      experience,
      salary,
      skills = [],
      createdAt: jobCreatedAt,
      recruiter,
    },
  } = bookmark;

  const handleRemoveBookmark = () => {
    dispatch(deleteBookmark(_id));
  };

  const visibleSkills = skills.slice(0, 3);
  const remainingSkills = skills.length - visibleSkills.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between border-b border-gray-100 p-5">
        <div className="flex items-center gap-4">
          {recruiter?.companyLogo ? (
            <img
              src={recruiter.companyLogo}
              alt={recruiter.companyName}
              className="h-14 w-14 rounded-2xl border border-gray-200 object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
              <Building2 size={28} className="text-blue-600" />
            </div>
          )}

          <div>
            <h3 className="line-clamp-2 text-2xl font-bold text-gray-900">
              {title}
            </h3>

            <p className="mt-1 text-base font-medium text-gray-500">
              {recruiter?.companyName}
            </p>
          </div>
        </div>

        <button
          onClick={handleRemoveBookmark}
          className="rounded-xl p-2 text-red-500 transition hover:bg-red-50"
          aria-label="Remove Bookmark"
        >
          <Heart size={22} className="fill-current" />
        </button>
      </div>

      {/* Card Body */}

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-4">
          {/* Job Details */}

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />

              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <BriefcaseBusiness size={16} />

              <span>{employmentType}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Laptop size={16} />

              <span>{workplaceType}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <IndianRupee size={16} />

              <span>
                ₹{salary?.min?.toLocaleString()} - ₹
                {salary?.max?.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Experience */}

          <div>
            <h4 className="mb-2 text-sm font-semibold text-gray-700">
              Experience
            </h4>

            <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              {experience}
            </span>
          </div>

          {/* Skills */}

          {skills.length > 0 && (
            <div>
              <h4 className="mb-3 text-sm font-semibold text-gray-700">
                Skills
              </h4>

              <div className="flex h-[64px] flex-wrap content-start gap-2 overflow-hidden">
                {visibleSkills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      max-w-[220px]
                      truncate
                      rounded-full
                      bg-blue-50
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-blue-700
                      ring-1
                      ring-blue-100
                    "
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}

                {remainingSkills > 0 && (
                  <span
                    className="
                      rounded-full
                      bg-gray-100
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-gray-600
                    "
                  >
                    +{remainingSkills}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Footer & Actions */}

        <div className="mt-auto">
          {/* Footer */}

          <div className="flex items-center justify-between border-t border-gray-100 pt-5 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Clock3 size={15} />

              <span>Saved {new Date(createdAt).toLocaleDateString()}</span>
            </div>

            <span>Posted {new Date(jobCreatedAt).toLocaleDateString()}</span>
          </div>

          {/* Actions */}

          <div className="mt-6 flex gap-4">
            <Link
              to={`/applicant/jobs/${jobId}`}
              className="
                flex-1
                rounded-2xl
                border
                border-gray-200
                px-5
                py-3.5
                text-center
                text-sm
                font-semibold
                text-gray-700
                transition-all
                duration-200
                hover:border-gray-300
                hover:bg-gray-50
              "
            >
              View Details
            </Link>

            {isApplied ? (
              <button
                type="button"
                disabled
                className="
                  flex
                  flex-1
                  cursor-default
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-green-600
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                "
              >
                <CircleCheck size={18} />
                Applied
              </button>
            ) : (
              <Link
                to={`/applicant/jobs/${jobId}`}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-blue-600
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-blue-700
                "
              >
                Apply Now
                <ArrowUpRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookmarkCard;
