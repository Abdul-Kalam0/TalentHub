const ProfessionalInformation = ({ formData, handleChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Professional Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Headline */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-gray-700">
            Professional Headline
          </label>

          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            maxLength={100}
            placeholder="e.g. MERN Stack Developer | Backend Developer"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <p className="mt-2 text-right text-sm text-gray-500">
            {formData.headline.length}/100
          </p>
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="0-1 Years">0-1 Years</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
        </div>

        {/* Education */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Education <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="e.g. B.Tech in Computer Science"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Bio */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-gray-700">
            About Me
          </label>

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={6}
            maxLength={500}
            placeholder="Introduce yourself, describe your technical skills, experience, projects and career goals..."
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span>Maximum 500 characters</span>

            <span>{formData.bio.length}/500</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInformation;
