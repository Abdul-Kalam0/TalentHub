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
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Required Skills
      </h2>

      <label className="mb-2 block font-medium text-gray-700">
        Skills <span className="text-red-500">*</span>
      </label>

      <div className="flex gap-3">
        <input
          type="text"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          placeholder="e.g. React.js"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <button
          type="button"
          onClick={addSkill}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {formData.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {formData.skills.map((currentSkill) => (
            <span
              key={currentSkill}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {currentSkill}

              <button
                type="button"
                onClick={() => removeSkill(currentSkill)}
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

export default SkillsSection;
