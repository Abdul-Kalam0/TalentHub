const SkillsSection = ({ formData, setFormData, skill, setSkill }) => {
  const addSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) {
      return;
    }

    if (formData.skills.includes(trimmedSkill)) {
      return;
    }

    setFormData((previous) => ({
      ...previous,
      skills: [...previous.skills, trimmedSkill],
    }));

    setSkill("");
  };

  const removeSkill = (skillToRemove) => {
    setFormData((previous) => ({
      ...previous,
      skills: previous.skills.filter(
        (currentSkill) => currentSkill !== skillToRemove,
      ),
    }));
  };

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Required Skills
      </h2>

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Skills <span className="text-red-500">*</span>
      </label>

      {/* Input */}

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          placeholder="e.g. React.js"
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
          onClick={addSkill}
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
          Add Skill
        </button>
      </div>

      {/* Skills */}

      {formData.skills.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {formData.skills.map((currentSkill) => (
            <span
              key={currentSkill}
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
              <span className="break-all">{currentSkill}</span>

              <button
                type="button"
                onClick={() => removeSkill(currentSkill)}
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

export default SkillsSection;
