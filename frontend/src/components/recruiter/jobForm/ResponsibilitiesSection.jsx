const ResponsibilitiesSection = ({
  formData,
  setFormData,
  responsibility,
  setResponsibility,
}) => {
  const addResponsibility = () => {
    const trimmedResponsibility = responsibility.trim();

    if (!trimmedResponsibility) {
      return;
    }

    if (formData.responsibilities.includes(trimmedResponsibility)) {
      return;
    }

    setFormData((previous) => ({
      ...previous,
      responsibilities: [...previous.responsibilities, trimmedResponsibility],
    }));

    setResponsibility("");
  };

  const removeResponsibility = (responsibilityToRemove) => {
    setFormData((previous) => ({
      ...previous,
      responsibilities: previous.responsibilities.filter(
        (currentResponsibility) =>
          currentResponsibility !== responsibilityToRemove,
      ),
    }));
  };

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Responsibilities
      </h2>

      <label className="mb-2 block font-medium text-gray-700">
        Responsibilities <span className="text-red-500">*</span>
      </label>

      <div className="flex gap-3">
        <input
          type="text"
          value={responsibility}
          onChange={(event) => setResponsibility(event.target.value)}
          placeholder="e.g. Build scalable React applications"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <button
          type="button"
          onClick={addResponsibility}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {formData.responsibilities.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {formData.responsibilities.map((currentResponsibility) => (
            <span
              key={currentResponsibility}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {currentResponsibility}

              <button
                type="button"
                onClick={() => removeResponsibility(currentResponsibility)}
                className="font-bold hover:text-red-600"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResponsibilitiesSection;
