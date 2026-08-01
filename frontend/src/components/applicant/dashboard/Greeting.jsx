import { Sparkles } from "lucide-react";

import { useAuth } from "../../../context/AuthContext";

const Greeting = () => {
  const { user } = useAuth();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-sm">
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles size={16} />

          <span className="text-sm font-medium">Applicant Dashboard</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold lg:text-4xl">
          Welcome back, {user?.fullName}! 👋
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Track your applications, complete your profile, and apply for your
          next opportunity.
        </p>
      </div>
    </section>
  );
};

export default Greeting;
