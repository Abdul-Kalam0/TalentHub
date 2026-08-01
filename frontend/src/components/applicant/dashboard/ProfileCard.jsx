import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { profile } = useSelector((state) => state.applicant);

  const applicant = profile;

  const user = applicant?.user;

  // ==========================
  // Profile Completion
  // ==========================

  const completionItems = [
    applicant?.photo,
    applicant?.headline,
    applicant?.bio,
    applicant?.phone,
    applicant?.education,
    applicant?.resume,
    applicant?.currentLocation,
    applicant?.skills?.length > 0,
    applicant?.socialLinks?.github,
    applicant?.socialLinks?.linkedin,
    applicant?.socialLinks?.portfolio,
  ];

  const completedFields = completionItems.filter(Boolean).length;

  const percentage = Math.round(
    (completedFields / completionItems.length) * 100,
  );

  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Cover */}

      <div className="relative h-28 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        {/* Avatar */}

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="relative">
            {applicant?.photo ? (
              <img
                src={applicant.photo}
                alt={user?.fullName}
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg">
                <UserRound size={42} className="text-blue-600" />
              </div>
            )}

            <button
              type="button"
              className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
            >
              <Camera size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="flex flex-1 flex-col p-6 pt-16">
        {/* Name */}

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">{user?.fullName}</h2>

          <p className="mt-2 text-sm font-medium text-blue-600">
            {applicant?.headline || "Professional headline not added"}
          </p>
        </div>

        {/* Contact */}

        <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-gray-400" />

            <span className="truncate text-sm text-gray-700">
              {user?.email}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-gray-400" />

            <span className="text-sm text-gray-700">
              {applicant?.currentLocation || "Location not added"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays size={18} className="text-gray-400" />

            <span className="text-sm text-gray-700">
              {applicant?.experience || "Experience not added"}
            </span>
          </div>

          {/* <div className="flex items-center gap-3">
            <FileText size={18} className="text-gray-400" />

            <span
              className={`text-sm font-medium ${
                applicant?.resume ? "text-green-600" : "text-red-500"
              }`}
            >
              {applicant?.resume ? "Resume Uploaded" : "Resume Missing"}
            </span>
          </div> */}
        </div>
        {/* Profile Strength */}

        <div className="mt-auto border-t border-gray-100 pt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Profile Strength
            </h3>

            <span className="text-sm font-bold text-blue-600">
              {percentage}%
            </span>
          </div>

          {/* Progress Bar */}

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-700"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>

          {/* Checklist */}

          {/* <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className={
                  applicant?.photo ? "text-green-600" : "text-gray-300"
                }
              />

              <span className="text-sm text-gray-700">Profile Photo</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className={
                  applicant?.headline ? "text-green-600" : "text-gray-300"
                }
              />

              <span className="text-sm text-gray-700">
                Professional Headline
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className={
                  applicant?.resume ? "text-green-600" : "text-gray-300"
                }
              />

              <span className="text-sm text-gray-700">Resume Uploaded</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className={
                  applicant?.skills?.length ? "text-green-600" : "text-gray-300"
                }
              />

              <span className="text-sm text-gray-700">Skills Added</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className={
                  applicant?.education ? "text-green-600" : "text-gray-300"
                }
              />

              <span className="text-sm text-gray-700">Education</span>
            </div>
          </div> */}

          {/* Button */}

          <Link
            to="/applicant/profile"
            className="
              group
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-5
              py-3
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            Complete Profile
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;
