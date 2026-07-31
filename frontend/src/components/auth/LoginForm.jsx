import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      console.log(result);

      if (result.success) {
        if (result.user.role === "applicant") {
          navigate("/applicant/dashboard", { replace: true });
        } else if (result.user.role === "recruiter") {
          navigate("/recruiter/dashboard", { replace: true });
        }
      }
    } finally {
      setLoading(false);
    }
  };

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

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="text-sm text-gray-500">OR</span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <button
            type="button"
            className="w-full rounded-lg border py-3 font-semibold transition hover:bg-gray-50"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
