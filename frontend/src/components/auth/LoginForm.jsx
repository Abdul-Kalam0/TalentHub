import { useEffect, useState } from "react";
import { ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ============================================
  // Loading Progress Animation
  // ============================================

  useEffect(() => {
    if (!loading) return;

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 95) return previous;

        if (previous < 40) return previous + 5;

        if (previous < 70) return previous + 3;

        if (previous < 90) return previous + 2;

        return previous + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [loading]);

  // ============================================
  // Handle Input Change
  // ============================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ============================================
  // Handle Login
  // ============================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      return toast.error("Please fill in all fields.");
    }

    try {
      setLoading(true);

      const result = await login(formData);

      if (result.success) {
        setProgress(100);

        setTimeout(() => {
          navigate(
            result.user.role === "applicant"
              ? "/applicant/dashboard"
              : "/recruiter/dashboard",
            {
              replace: true,
            },
          );
        }, 400);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // ============================================
  // Full Page Loader
  // ============================================

  if (loading) {
    return (
      <section className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-[32px] border border-white/40 bg-white/90 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          {/* Logo */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 shadow-lg">
            <span className="text-2xl font-bold text-white">TH</span>
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-center text-3xl font-bold text-slate-900">
            Signing You In
          </h2>

          <p className="mt-3 text-center text-slate-500">
            Preparing your TalentHub workspace...
          </p>

          {/* Progress */}

          <div className="mt-10 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
            <Loader2 size={18} className="animate-spin" />
            {progress}% Completed
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      className="
        flex
        flex-1
        items-center
        justify-center
        px-6
        py-10
        lg:justify-end
        lg:px-16
        xl:px-24
      "
    >
      <div className="w-full max-w-md">
        {/* Mobile Branding */}

        <div className="mb-10 text-center lg:hidden">
          <h1 className="text-4xl font-bold text-white">TalentHub</h1>

          <p className="mt-3 text-white/80">AI Recruitment Platform</p>
        </div>

        {/* Glass Card */}

        <div
          className="
            rounded-[32px]
            border
            border-white/30
            bg-white/85
            p-8
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
            sm:p-10
          "
        >
          {/* Header */}

          <div>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Welcome Back
            </span>

            <h1 className="mt-6 text-4xl font-bold text-slate-900">
              Sign in to TalentHub
            </h1>

            <p className="mt-3 leading-7 text-slate-500">
              Access your dashboard, applications and discover your next career
              opportunity.
            </p>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Email */}

            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    py-4
                    pl-14
                    pr-5
                    text-slate-700
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                  required
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    py-4
                    pl-14
                    pr-14
                    text-slate-700
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                    transition-colors
                    hover:text-slate-700
                  "
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="
                group
                mt-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                px-6
                py-4
                text-lg
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-2xl
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              Login
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Divider */}

          <div className="my-10 flex items-center">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="px-4 text-sm font-medium text-slate-400">
              Secure Authentication
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Footer */}

          {/* Mobile Signup */}

          <div className="mt-10 border-t border-slate-200 pt-6 text-center lg:hidden">
            <p className="text-slate-500">Don't have an account?</p>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="
                mt-2
                font-semibold
                text-blue-600
                transition-colors
                hover:text-blue-700
              "
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
