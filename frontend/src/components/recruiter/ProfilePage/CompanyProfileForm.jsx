import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  updateRecruiterProfile,
  uploadCompanyLogo,
} from "../../../redux/recruiter/recruiterThunks";

const CompanyProfileForm = ({ recruiter, onCancel }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    description: "",
  });

  const [companyLogo, setCompanyLogo] = useState(null);

  useEffect(() => {
    if (recruiter) {
      setFormData({
        companyName: recruiter.companyName || "",
        industry: recruiter.industry || "",
        companySize: recruiter.companySize || "",
        website: recruiter.website || "",
        description: recruiter.description || "",
      });
    }
  }, [recruiter]);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogoChange = (event) => {
    setCompanyLogo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const profileResult = await dispatch(updateRecruiterProfile(formData));

    if (!updateRecruiterProfile.fulfilled.match(profileResult)) {
      toast.error("Failed to update company profile.");
      return;
    }

    if (companyLogo) {
      const logoResult = await dispatch(uploadCompanyLogo(companyLogo));

      if (!uploadCompanyLogo.fulfilled.match(logoResult)) {
        toast.error("Failed to upload company logo.");
        return;
      }
    }

    toast.success("Company profile updated successfully.");
    onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        Company Information
      </h2>

      {/* Company Logo */}

      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4">
          {companyLogo ? (
            <img
              src={URL.createObjectURL(companyLogo)}
              alt="Company Logo Preview"
              className="h-28 w-28 rounded-full border border-gray-200 object-cover"
            />
          ) : recruiter.companyLogo ? (
            <img
              src={recruiter.companyLogo}
              alt="Company Logo"
              className="h-28 w-28 rounded-full border border-gray-200 object-cover"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-5xl">
              🏢
            </div>
          )}
        </div>

        <input type="file" accept="image/*" onChange={handleLogoChange} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Name */}

        <div>
          <label className="mb-2 block font-medium">
            Company Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Industry */}

        <div>
          <label className="mb-2 block font-medium">
            Industry <span className="text-red-500">*</span>
          </label>

          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Industry</option>
            <option value="Software">Software</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Marketing">Marketing</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Consulting">Consulting</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Company Size */}

        <div>
          <label className="mb-2 block font-medium">
            Company Size <span className="text-red-500">*</span>
          </label>

          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Company Size</option>
            <option value="1-10">1-10 Employees</option>
            <option value="11-50">11-50 Employees</option>
            <option value="51-200">51-200 Employees</option>
            <option value="201-500">201-500 Employees</option>
            <option value="501-1000">501-1000 Employees</option>
            <option value="1000+">1000+ Employees</option>
          </select>
        </div>

        {/* Website */}

        <div>
          <label className="mb-2 block font-medium">Website</label>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Description */}

        <div className="md:col-span-2">
          <label className="mb-2 flex items-center justify-between font-medium">
            <span>
              Company Description <span className="text-red-500">*</span>
            </span>

            <span className="text-sm text-gray-500">
              {formData.description.length}/1000
            </span>
          </label>

          <textarea
            rows={6}
            maxLength={1000}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium transition hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default CompanyProfileForm;
