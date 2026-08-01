import Greeting from "./Greeting";
import QuickActions from "./QuickActions";

const DashboardHeader = () => {
  return (
    <section className="flex h-full flex-col gap-6">
      {/* Greeting */}

      <Greeting />

      {/* Quick Actions */}

      <QuickActions />
    </section>
  );
};

export default DashboardHeader;
