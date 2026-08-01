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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-red-600">
            Unable to load dashboard
          </h2>

          <p className="mt-3 text-gray-600">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}

      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Recruiter Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
          Welcome back! Here's a quick overview of your hiring activity,
          applications, and recruitment progress.
        </p>
      </section>

      {/* Statistics */}

      <section>
        <DashboardStats dashboard={dashboard} />
      </section>

      {/* Main Grid */}

      <section className="mt-10 grid gap-8 xl:grid-cols-12">
        {/* Recent Applications */}

        <div className="xl:col-span-8">
          <RecentApplications applications={dashboard.recentApplications} />
        </div>

        {/* Quick Actions */}

        <div className="xl:col-span-4">
          <QuickActions />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
