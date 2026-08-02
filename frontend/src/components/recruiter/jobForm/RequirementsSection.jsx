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
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Requirements
      </h2>

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Requirements <span className="text-red-500">*</span>
      </label>

      {/* Input */}

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={requirement}
          onChange={(event) => setRequirement(event.target.value)}
          placeholder="e.g. Bachelor's degree in Computer Science"
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

        <button
          type="button"
          onClick={addRequirement}
          className="
            w-full
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-blue-700
            hover:shadow-md
            sm:w-auto
            sm:whitespace-nowrap
          "
        >
          Add Requirement
        </button>
      </div>

      {/* Requirements */}

      {formData.requirements.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {formData.requirements.map((currentRequirement) => (
            <span
              key={currentRequirement}
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              <span className="break-all">{currentRequirement}</span>

              <button
                type="button"
                onClick={() => removeRequirement(currentRequirement)}
                className="
                  font-bold
                  transition-colors
                  hover:text-red-600
                "
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
