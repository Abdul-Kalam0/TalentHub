const DescriptionSection = ({ description, handleChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Job Description
      </h2>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Description <span className="text-red-500">*</span>
        </label>

        <textarea
          name="description"
          rows={8}
          value={description}
          onChange={handleChange}
          placeholder="Describe the job role, responsibilities, expectations, and other important details..."
          required
          className="
            w-full
            resize-y
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            text-sm
            leading-7
            outline-none
            transition-all
            duration-200
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />
      </div>
    </section>
  );
};

export default DescriptionSection;
