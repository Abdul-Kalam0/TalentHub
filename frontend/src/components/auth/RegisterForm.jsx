import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

import RoleSelector from "./RoleSelector";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",

    role: "applicant",

    // Applicant

    experience: "Fresher",
    currentLocation: "",
    education: "",
    skills: "",
    bio: "",

    // Recruiter

    companyName: "",
    companySize: "1-10",
    website: "",
    aboutCompany: "",
  });

  // ==========================
  // Change Input
  // ==========================

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==========================
  // Change Role
  // ==========================

  const handleRoleChange = (role) => {
    setFormData((previous) => ({
      ...previous,
      role,
    }));
  };

  // ==========================
  // Submit
  // ==========================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.fullName.trim()) {
      return toast.error("Full name is required.");
    }

    if (!formData.email.trim()) {
      return toast.error("Email is required.");
    }

    if (!formData.password.trim()) {
      return toast.error("Password is required.");
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      setLoading(true);

      let payload = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
      };

      if (formData.role === "applicant") {
        payload = {
          ...payload,

          experience: formData.experience,
          currentLocation: formData.currentLocation,
          education: formData.education,

          skills: formData.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),

          bio: formData.bio,
        };
      }

      if (formData.role === "recruiter") {
        payload = {
          ...payload,

          companyName: formData.companyName,
          companySize: formData.companySize,
          website: formData.website,
          aboutCompany: formData.aboutCompany,
        };
      }

      const result = await register(payload);

      if (result.success) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        flex
        flex-1
        items-center
        justify-center
        px-4
        py-4
        sm:px-6
        lg:justify-end
        lg:px-14
        xl:px-20
      "
    >
      <div
        className="
          w-full
          max-w-sm
          lg:max-w-[720px]
          max-h-[94dvh]
          overflow-y-auto
          rounded-[30px]
          border
          border-white/30
          bg-white/95
          p-5
          shadow-[0_25px_70px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          sm:p-7
          lg:p-8
        "
      >
        {/* Mobile Branding */}

        <div className="mb-6 text-center lg:hidden">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
            <span className="text-lg font-bold text-white">TH</span>
          </div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Join TalentHub and start your journey.
          </p>
        </div>

        {/* Desktop Heading */}

        <div className="hidden lg:block">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Join TalentHub
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-500">
            Discover jobs, manage applications or hire top talent with one
            powerful platform.
          </p>
        </div>

        {/* Role */}

        <div className="mt-6">
          <RoleSelector role={formData.role} onRoleChange={handleRoleChange} />
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Common Fields */}

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Full Name */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
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
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
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
                  placeholder="john@example.com"
                  required
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
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
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
                  placeholder="Create password"
                  required
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
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
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
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Applicant */}

          {formData.role === "applicant" && (
            <>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Experience */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Experience
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      focus:border-blue-600
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 Years">0-1 Years</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                {/* Current Location */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Current Location
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleChange}
                      placeholder="Noida, India"
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
                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>
                </div>

                {/* Education */}

                <div className="lg:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Education
                  </label>

                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="B.Tech Computer Science"
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
                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>
                </div>
              </div>
              {/* Skills */}

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Skills
                </label>

                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="React, Node.js, MongoDB"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />

                <p className="mt-2 text-xs text-slate-500">
                  Separate skills with commas.
                </p>
              </div>

              {/* Bio */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Bio
                </label>

                <textarea
                  rows={4}
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell recruiters about yourself..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>
            </>
          )}

          {/* Recruiter */}

          {formData.role === "recruiter" && (
            <>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Company Name */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Company Name
                  </label>

                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="TalentHub Pvt. Ltd."
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
                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>
                </div>

                {/* Company Size */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Company Size
                  </label>

                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      focus:border-blue-600
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  >
                    <option value="1-10">1–10 Employees</option>
                    <option value="11-50">11–50 Employees</option>
                    <option value="51-200">51–200 Employees</option>
                    <option value="201-500">201–500 Employees</option>
                    <option value="501-1000">501–1000 Employees</option>
                    <option value="1000+">1000+ Employees</option>
                  </select>
                </div>
              </div>
              {/* Company Website */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Company Website
                </label>

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://company.com"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* About Company */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  About Company
                </label>

                <textarea
                  rows={5}
                  name="aboutCompany"
                  value={formData.aboutCompany}
                  onChange={handleChange}
                  placeholder="Describe your company..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>
            </>
          )}

          {/* Submit Button */}

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
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-xl
              lg:text-base
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? "Creating Account..." : "Create Account"}

            {!loading && (
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </form>

        {/* Desktop Footer */}

        <div className="mt-8 hidden lg:block">
          <div className="flex items-center">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="px-4 text-xs font-medium uppercase tracking-wider text-slate-400">
              Secure Registration
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            Create your TalentHub account to discover opportunities, manage
            applications, and connect with recruiters.
          </p>

          <p className="mt-2 text-center text-xs text-slate-400">
            Your information is protected with secure encrypted authentication.
          </p>
        </div>

        {/* Mobile Footer */}

        <div className="mt-6 border-t border-slate-200 pt-5 text-center lg:hidden">
          <p className="text-sm text-slate-500">Already have an account?</p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="
              mt-2
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              transition-all
              duration-300
              hover:gap-3
              hover:text-blue-700
            "
          >
            Login
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
