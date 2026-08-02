const SocialLinksSection = ({ socialLinks, handleChange }) => {
  return (
    <section>
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Social Links
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Help recruiters explore your work beyond your resume.
          </p>
        </div>

        <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          Optional
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* GitHub */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            GitHub
          </label>

          <input
            type="url"
            name="github"
            value={socialLinks.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
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

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Share your public repositories.
          </p>
        </div>

        {/* LinkedIn */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            LinkedIn
          </label>

          <input
            type="url"
            name="linkedin"
            value={socialLinks.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
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

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Let recruiters view your professional profile.
          </p>
        </div>

        {/* Portfolio */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Portfolio Website
          </label>

          <input
            type="url"
            name="portfolio"
            value={socialLinks.portfolio}
            onChange={handleChange}
            placeholder="https://yourportfolio.com"
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

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Showcase your portfolio or personal website.
          </p>
        </div>
      </div>

      {/* Info Box */}

      <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-4 sm:p-5">
        <h3 className="text-sm font-semibold text-blue-800">
          Why add social links?
        </h3>

        <p className="mt-2 text-sm leading-6 text-blue-700">
          Recruiters often review GitHub repositories, LinkedIn profiles, and
          personal portfolios before scheduling interviews. Keeping these links
          updated helps demonstrate your experience and recent work.
        </p>
      </div>
    </section>
  );
};

export default SocialLinksSection;
