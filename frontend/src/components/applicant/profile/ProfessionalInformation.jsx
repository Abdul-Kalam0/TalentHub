const ProfessionalInformation = ({ formData, handleChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-gray-900">
        Professional Information
      </h2>

      <div className="grid gap-7 md:grid-cols-2">
        {/* Professional Headline */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Professional Headline
          </label>

          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            maxLength={100}
            placeholder="e.g. MERN Stack Developer | Backend Developer"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <div className="mt-2 flex justify-between">
            <p className="text-xs text-gray-500">
              A short headline recruiters see first.
            </p>

            <p className="text-xs text-gray-500">
              {formData.headline.length}/100
            </p>
          </div>
        </div>

        {/* Experience */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Experience <span className="text-red-500">*</span>
          </label>

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="0-1 Years">0-1 Years</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>

          <p className="mt-2 text-xs text-gray-500">
            Select your current professional experience.
          </p>
        </div>

        {/* Education */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Education <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="e.g. B.Tech in Computer Science"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <p className="mt-2 text-xs text-gray-500">
            Mention your highest qualification.
          </p>
        </div>

        {/* About Me */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            About Me
          </label>

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={6}
            maxLength={500}
            placeholder="Introduce yourself, summarize your experience, technical skills, projects, achievements and career goals..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Tell recruiters what makes you a strong candidate.
            </p>

            <p className="text-xs text-gray-500">{formData.bio.length}/500</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInformation;
