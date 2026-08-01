const SocialLinksSection = ({ socialLinks, handleChange }) => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Social Links</h2>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          Optional
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* GitHub */}

        <div>
          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
            <span className="text-lg">🐙</span>
            GitHub
          </label>

          <input
            type="url"
            name="github"
            value={socialLinks.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* LinkedIn */}

        <div>
          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
            <span className="text-lg">💼</span>
            LinkedIn
          </label>

          <input
            type="url"
            name="linkedin"
            value={socialLinks.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Portfolio */}

        <div>
          <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">
            <span className="text-lg">🌐</span>
            Portfolio
          </label>

          <input
            type="url"
            name="portfolio"
            value={socialLinks.portfolio}
            onChange={handleChange}
            placeholder="https://yourportfolio.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-700">
          Adding your GitHub, LinkedIn, and portfolio helps recruiters learn
          more about your work and can improve your profile visibility.
        </p>
      </div>
    </section>
  );
};

export default SocialLinksSection;
