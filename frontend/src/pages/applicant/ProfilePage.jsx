import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApplicantProfile } from "../../redux/applicant/applicantThunks";

import ApplicantProfileForm from "../../components/applicant/profile/ApplicantProfileForm";
import LoadingProfile from "../../components/applicant/profile/LoadingProfile";
import EmptyProfile from "../../components/applicant/profile/EmptyProfile";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { profile, fetchLoading } = useSelector((state) => state.applicant);

  useEffect(() => {
    dispatch(fetchApplicantProfile());
  }, [dispatch]);

  if (fetchLoading) {
    return <LoadingProfile />;
  }

  if (!profile) {
    return <EmptyProfile />;
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
