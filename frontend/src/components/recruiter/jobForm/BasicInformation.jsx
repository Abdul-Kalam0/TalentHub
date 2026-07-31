const BasicInformation = ({ formData, handleChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Basic Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Job Title */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-gray-700">
            Job Title <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Location */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Location <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Noida"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Openings */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Number of Openings <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            min={1}
            name="openings"
            value={formData.openings}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Employment Type */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Employment Type <span className="text-red-500">*</span>
          </label>

          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Employment Type</option>

            <option value="Full-time">Full-time</option>

            <option value="Part-time">Part-time</option>

            <option value="Contract">Contract</option>

            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Workplace Type */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Workplace Type <span className="text-red-500">*</span>
          </label>

          <select
            name="workplaceType"
            value={formData.workplaceType}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Workplace Type</option>

            <option value="On-site">On-site</option>

            <option value="Hybrid">Hybrid</option>

            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Experience */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Experience <span className="text-red-500">*</span>
          </label>

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Experience</option>

            <option value="Fresher">Fresher</option>

            <option value="0-1 Years">0-1 Years</option>

            <option value="1-3 Years">1-3 Years</option>

            <option value="3-5 Years">3-5 Years</option>

            <option value="5+ Years">5+ Years</option>
          </select>
        </div>

        {/* Application Deadline */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Application Deadline <span className="text-red-500">*</span>
          </label>

          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;
