import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import RoleSelector from "./RoleSelector";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [loading, setLoading] = useState(false);

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

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          bio: formData.bio,
          skills: formData.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
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
    <section className="flex w-3/5 justify-center p-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold">Create Account</h1>

        <p className="mt-2 text-gray-500">
          Join TalentHub and start your journey.
        </p>

        <div className="mt-8">
          <RoleSelector role={formData.role} onRoleChange={handleRoleChange} />
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Common Fields */}

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="mb-2 block font-medium">Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full rounded-lg border p-3"
              />
            </div>
          </div>

          {/* Applicant Fields */}

          {formData.role === "applicant" && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block font-medium">Experience</label>

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border p-3"
                >
                  <option value="Fresher">Fresher</option>
                  <option value="0-1 Years">0-1 Years</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="3-5 Years">3-5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Current Location
                </label>

                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border p-3"
                  placeholder="Noida, Uttar Pradesh"
                />
              </div>

              <div className="col-span-2">
                <label className="mb-2 block font-medium">Education</label>

                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="B.Tech in Computer Science"
                />
              </div>

              <div className="col-span-2">
                <label className="mb-2 block font-medium">Skills</label>

                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="React, Node.js, MongoDB"
                />

                <p className="mt-1 text-sm text-gray-500">
                  Separate multiple skills with commas.
                </p>
              </div>

              <div className="col-span-2">
                <label className="mb-2 block font-medium">Bio</label>

                <textarea
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="Tell recruiters about yourself..."
                />
              </div>
            </div>
          )}

          {/* Recruiter Fields */}
          {formData.role === "recruiter" && (
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block font-medium">Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border p-3"
                  placeholder="TalentHub Pvt. Ltd."
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Company Size</label>

                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border p-3"
                >
                  <option value="1-10">1-10 Employees</option>
                  <option value="11-50">11-50 Employees</option>
                  <option value="51-200">51-200 Employees</option>
                  <option value="201-500">201-500 Employees</option>
                  <option value="501-1000">501-1000 Employees</option>
                  <option value="1000+">1000+ Employees</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="mb-2 block font-medium">
                  Company Website
                </label>

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="https://company.com"
                />
              </div>

              <div className="col-span-2">
                <label className="mb-2 block font-medium">About Company</label>

                <textarea
                  name="aboutCompany"
                  rows={5}
                  value={formData.aboutCompany}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="Briefly describe your company..."
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-t pt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
