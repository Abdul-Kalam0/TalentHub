import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecruiterProfile } from "../../redux/recruiter/recruiterThunks";

import LoadingProfile from "../../components/recruiter/ProfilePage/LoadingProfile";
import RecruiterInfo from "../../components/recruiter/ProfilePage/RecruiterInfo";
import CompanyInfo from "../../components/recruiter/ProfilePage/CompanyInfo";
import CompanyProfileForm from "../../components/recruiter/ProfilePage/CompanyProfileForm";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { recruiter, loading, error } = useSelector((state) => state.recruiter);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchRecruiterProfile());
  }, [dispatch]);

  // Initial Loading
  if (loading && !recruiter) {
    return <LoadingProfile />;
  }

  // Fetch Error
  if (error && !recruiter) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">{error}</h2>
        </div>
      </div>
    );
  }

  // No Recruiter Found
  if (!recruiter) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-700">
            Recruiter profile not found.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

        <p className="mt-2 text-gray-600">
          Manage your recruiter and company information.
        </p>
      </div>

      {/* Recruiter Information */}

      <RecruiterInfo recruiter={recruiter} />

      {/* Company Information */}

      {isEditing ? (
        <CompanyProfileForm
          recruiter={recruiter}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <CompanyInfo recruiter={recruiter} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};

export default ProfilePage;
