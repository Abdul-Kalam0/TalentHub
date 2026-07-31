const DescriptionSection = ({ description, handleChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Job Description
      </h2>

      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Description <span className="text-red-500">*</span>
        </label>

        <textarea
          name="description"
          rows={8}
          value={description}
          onChange={handleChange}
          placeholder="Describe the job role, responsibilities, expectations, and other important details..."
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>
    </section>
  );
};

export default DescriptionSection;
