import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // =====================================
  // Progress Bar Animation
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all fields.");
    }

    try {
      setLoading(true);

      const result = await login(formData);

      if (result.success) {
        setProgress(100);

        setTimeout(() => {
          if (result.user.role === "applicant") {
            navigate("/applicant/dashboard", {
              replace: true,
            });
          } else if (result.user.role === "recruiter") {
            navigate("/recruiter/dashboard", {
              replace: true,
            });
          }
        }, 300);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // =====================================
  // Full Page Loader
  // =====================================

  if (loading) {
    return (
      <section className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md text-center">
          {/* Logo */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 shadow-xl">
            <span className="text-2xl font-bold text-white">TH</span>
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-bold text-gray-900">
            Welcome back!
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Preparing your TalentHub workspace...
          </p>

          {/* Progress */}

          <div className="mt-10 h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="mt-4 text-sm font-semibold text-gray-600">
            {progress}%
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-3/5 justify-center p-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold">Welcome Back</h1>

        <p className="mt-2 text-gray-500">
          Login to continue your TalentHub journey.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-lg border p-3"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="h-4 w-4" />
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
