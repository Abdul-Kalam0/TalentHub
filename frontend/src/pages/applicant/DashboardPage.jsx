import ProfileCompletion from "../../components/applicant/dashboard/ProfileCompletion";
import RecentActivity from "../../components/applicant/dashboard/RecentActivity";
import RecommendedJobs from "../../components/applicant/dashboard/RecommendedJobs";
import StatsCards from "../../components/applicant/dashboard/StatsCards";
import UpcomingInterviews from "../../components/applicant/dashboard/UpcomingInterviews";
import WelcomeBanner from "../../components/applicant/dashboard/WelcomeBanner";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <StatsCards />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <RecentActivity />
        </div>

        <div className="col-span-4">
          <RecommendedJobs />
        </div>

        <div className="col-span-8">
          <UpcomingInterviews />
        </div>

        <div className="col-span-4">
          <ProfileCompletion />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
