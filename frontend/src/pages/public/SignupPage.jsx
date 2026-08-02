import { Link } from "react-router-dom";

import RegisterForm from "../../components/auth/RegisterForm";

import careerGrowth from "../../assets/auth/career-growth.png";

const SignupPage = () => {
  return (
    <main className="relative h-dvh overflow-hidden">
      {/* Background */}

      <img
        src={careerGrowth}
        alt="Career Growth"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}

      <div className="relative z-10 flex h-full">
        {/* Desktop Branding */}

        <div className="relative hidden w-1/2 p-12 text-white lg:flex">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">TalentHub</h1>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

              <span className="text-sm font-semibold tracking-wide">
                AI Recruitment Platform
              </span>
            </div>
          </div>

          {/* Bottom Card */}

          <div className="absolute bottom-16 left-12">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl">
              <p className="text-sm font-medium text-white/80">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="mt-3 inline-flex items-center gap-2 text-2xl font-bold text-white transition-all duration-300 hover:gap-3 hover:text-blue-200"
              >
                Login
                <span className="text-3xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Register Form */}

        <RegisterForm />
      </div>
    </main>
  );
};

export default SignupPage;
