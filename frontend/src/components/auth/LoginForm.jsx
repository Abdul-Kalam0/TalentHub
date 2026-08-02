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

  // =====================================
  // Progress Animation
  // =====================================

  useEffect(() => {
    if (!loading) return;

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;

        if (prev < 40) return prev + 5;

        if (prev < 70) return prev + 3;

        if (prev < 90) return prev + 2;

        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [loading]);

  // =====================================
  // Handle Input
  // =====================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================
  // Login
  // =====================================

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
        }, 350);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // =====================================
  // Loading Screen
  // =====================================

  if (loading) {
    return (
      <section className="flex flex-1 items-center justify-center px-5">
        <div className="w-full max-w-sm rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <span className="text-xl font-bold text-white">TH</span>
          </div>

          <h2 className="mt-6 text-center text-2xl font-bold text-slate-900">
            Signing In
          </h2>

          <p className="mt-2 text-center text-sm text-slate-500">
            Preparing your workspace...
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600">
            <Loader2 size={16} className="animate-spin" />
            {progress}%
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        flex
        h-full
        flex-1
        items-center
        justify-center
        px-4
        py-4
        sm:px-6
        md:px-8
        lg:justify-end
        lg:px-16
        xl:px-20
      "
    >
      <div
        className="
          w-full
          max-w-sm
          lg:max-w-[430px]
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-white/30
            bg-white/95
            p-5
            shadow-[0_25px_70px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
            sm:p-6
            lg:rounded-[30px]
            lg:p-8
          "
        >
          {/* Mobile Branding */}

          <div className="mb-5 text-center lg:hidden">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
              <span className="text-lg font-bold text-white">TH</span>
            </div>

            <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500">Sign in to continue.</p>
          </div>

          {/* Desktop Heading */}

          <div className="hidden lg:block">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Welcome Back
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Sign in to TalentHub
            </h1>

            <p className="mt-3 text-base leading-7 text-slate-500">
              Access your dashboard and manage your career journey.
            </p>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 lg:mt-8 lg:space-y-5"
          >
            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="john@example.com"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-12
                    pr-4
                    text-sm
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                    lg:py-3.5
                    lg:text-base
                  "
                  required
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-12
                    pr-12
                    text-sm
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                    lg:py-3.5
                    lg:text-base
                  "
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-xl
                lg:py-3.5
                lg:text-base
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              Login
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Desktop Divider */}

          <div className="mt-6 hidden items-center lg:flex">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="px-4 text-xs font-medium uppercase tracking-wider text-slate-400">
              Secure Authentication
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Desktop Footer */}

          <div className="mt-5 hidden space-y-2 lg:block">
            <p className="text-sm leading-6 text-slate-500">
              Manage your applications, track interviews and connect with
              recruiters securely through TalentHub.
            </p>

            <p className="text-xs text-slate-400">
              Protected with encrypted sessions.
            </p>
          </div>

          {/* Mobile Footer */}

          <div className="mt-5 border-t border-slate-200 pt-4 text-center lg:hidden">
            <p className="text-sm text-slate-500">Don't have an account?</p>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="
                mt-2
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-blue-600
                transition-all
                duration-200
                hover:gap-3
                hover:text-blue-700
              "
            >
              Create Account
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
