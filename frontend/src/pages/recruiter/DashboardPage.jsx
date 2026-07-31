import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecruiterDashboard } from "../../redux/dashboard/dashboardThunks";

import DashboardStats from "../../components/recruiter/dashboard/DashboardStats";
import RecentApplications from "../../components/recruiter/dashboard/RecentApplications";
import QuickActions from "../../components/recruiter/dashboard/QuickActions";
import LoadingDashboard from "../../components/recruiter/dashboard/LoadingDashboard";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const { dashboard, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchRecruiterDashboard());
  }, [dispatch]);

  if (loading) {
    return <LoadingDashboard />;
  }

  if (!dashboard) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Unable to load dashboard.
          </h2>

          <p className="mt-2 text-gray-600">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Recruiter Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back! Here's an overview of your hiring activity.
        </p>
      </div>

      {/* Statistics */}

      <DashboardStats dashboard={dashboard} />

      {/* Main Content */}

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Recent Applications */}

        <div className="lg:col-span-2">
          <RecentApplications applications={dashboard.recentApplications} />
        </div>

        {/* Quick Actions */}

        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
