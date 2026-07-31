const RequirementsSection = ({
  formData,
  setFormData,
  requirement,
  setRequirement,
}) => {
  const addRequirement = () => {
    const trimmedRequirement = requirement.trim();

    if (!trimmedRequirement) {
      return;
    }

    if (formData.requirements.includes(trimmedRequirement)) {
      return;
    }

    setFormData((previous) => ({
      ...previous,
      requirements: [...previous.requirements, trimmedRequirement],
    }));

    setRequirement("");
  };

  const removeRequirement = (requirementToRemove) => {
    setFormData((previous) => ({
      ...previous,
      requirements: previous.requirements.filter(
        (currentRequirement) => currentRequirement !== requirementToRemove,
      ),
    }));
  };

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Requirements
      </h2>

      <label className="mb-2 block font-medium text-gray-700">
        Requirements <span className="text-red-500">*</span>
      </label>

      <div className="flex gap-3">
        <input
          type="text"
          value={requirement}
          onChange={(event) => setRequirement(event.target.value)}
          placeholder="e.g. Bachelor's degree in Computer Science"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <button
          type="button"
          onClick={addRequirement}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {formData.requirements.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {formData.requirements.map((currentRequirement) => (
            <span
              key={currentRequirement}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {currentRequirement}

              <button
                type="button"
                onClick={() => removeRequirement(currentRequirement)}
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

export default RequirementsSection;
