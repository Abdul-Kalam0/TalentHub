import { Link } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";

import careerGrowth from "../../assets/auth/career-growth.png";

const LoginPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}

      <img
        src={careerGrowth}
        alt="Career Growth"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}

      <div className="relative z-10 flex min-h-screen">
        {/* Left Branding */}

        <div className="hidden w-1/2 flex-col justify-between p-12 text-white lg:flex">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">TalentHub</h1>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <span className="text-sm font-semibold tracking-wide">
                AI Recruitment Platform
              </span>
            </div>
          </div>

          <div className="absolute bottom-16 left-12">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl">
              <p className="text-sm font-medium text-white/80">
                Don't have an account?
              </p>

              <Link
                to="/signup"
                className="mt-3 inline-flex items-center gap-2 text-2xl font-bold text-white transition-all duration-300 hover:gap-3 hover:text-blue-200"
              >
                Create Account
                <span className="text-3xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Login */}

        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
