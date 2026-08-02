import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApplicantProfile } from "../../redux/applicant/applicantThunks";
import { fetchMyApplications } from "../../redux/applications/applicationsThunks";

import DashboardHeader from "../../components/applicant/dashboard/DashboardHeader";
import ProfileCard from "../../components/applicant/dashboard/ProfileCard";
import RecentApplications from "../../components/applicant/dashboard/RecentApplications";
import LoadingDashboard from "../../components/applicant/dashboard/LoadingDashboard";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const { fetchLoading } = useSelector((state) => state.applicant);

  const { myApplications } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(fetchApplicantProfile());
    dispatch(fetchMyApplications());
  }, [dispatch]);

  if (fetchLoading) {
    return <LoadingDashboard />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Section */}

      <section className="grid items-stretch gap-8 lg:grid-cols-12">
        {/* Left Sidebar */}

        <aside className="lg:col-span-4">
          <ProfileCard />
        </aside>

        {/* Right Content */}

        <div className="flex h-full flex-col lg:col-span-8">
          <DashboardHeader />
        </div>
      </section>

      {/* Recent Applications */}

      <section className="mt-8">
        <RecentApplications applications={myApplications} />
      </section>
    </div>
  );
};

export default DashboardPage;
