const SalarySection = ({ salary, handleSalaryChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Salary Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Minimum Salary */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Maximum Salary */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SalarySection;
