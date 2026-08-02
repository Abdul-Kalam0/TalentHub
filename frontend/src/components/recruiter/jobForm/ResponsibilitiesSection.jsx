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
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Responsibilities
      </h2>

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Responsibilities <span className="text-red-500">*</span>
      </label>

      {/* Input */}

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={responsibility}
          onChange={(event) => setResponsibility(event.target.value)}
          placeholder="e.g. Build scalable React applications"
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
          onClick={addResponsibility}
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
          Add Responsibility
        </button>
      </div>

      {/* Responsibilities */}

      {formData.responsibilities.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {formData.responsibilities.map((currentResponsibility) => (
            <span
              key={currentResponsibility}
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
              <span className="break-all">{currentResponsibility}</span>

              <button
                type="button"
                onClick={() => removeResponsibility(currentResponsibility)}
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

export default ResponsibilitiesSection;
