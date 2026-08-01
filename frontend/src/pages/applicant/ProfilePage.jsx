import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApplicantProfile } from "../../redux/applicant/applicantThunks";

import ApplicantProfileForm from "../../components/applicant/profile/ApplicantProfileForm";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { profile, fetchLoading } = useSelector((state) => state.applicant);

  useEffect(() => {
    dispatch(fetchApplicantProfile());
  }, [dispatch]);

  if (fetchLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {/* Page Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>

        <p className="mt-2 text-gray-600">
          Complete your profile to increase your chances of getting hired by
          recruiters.
        </p>
      </div>

      <ApplicantProfileForm profile={profile} />
    </div>
  );
};

export default ProfilePage;
