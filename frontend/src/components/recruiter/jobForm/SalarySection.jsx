const SalarySection = ({ salary, handleSalaryChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Salary Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Minimum Salary */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Minimum Salary (₹) <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            name="min"
            value={salary.min}
            onChange={handleSalaryChange}
            placeholder="e.g. 500000"
            min={0}
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition-all
              duration-200
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>

        {/* Maximum Salary */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Maximum Salary (₹) <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            name="max"
            value={salary.max}
            onChange={handleSalaryChange}
            placeholder="e.g. 1200000"
            min={0}
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              text-sm
              outline-none
              transition-all
              duration-200
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />
        </div>
      </div>
    </section>
  );
};

export default SalarySection;
