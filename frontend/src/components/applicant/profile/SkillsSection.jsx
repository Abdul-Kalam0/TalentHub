const SkillsSection = ({ formData, setFormData, skill, setSkill }) => {
  const handleAddSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    if (formData.skills.includes(trimmedSkill)) return;

    setFormData((previous) => ({
      ...previous,
      skills: [...previous.skills, trimmedSkill],
    }));

    setSkill("");
  };

  const handleRemoveSkill = (selectedSkill) => {
    setFormData((previous) => ({
      ...previous,
      skills: previous.skills.filter(
        (currentSkill) => currentSkill !== selectedSkill,
      ),
    }));
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          Skills <span className="text-red-500">*</span>
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {formData.skills.length} Skill
          {formData.skills.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Add Skill */}

      <div className="flex gap-3">
        <input
          type="text"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleAddSkill();
            }
          }}
          placeholder="e.g. React, Node.js, MongoDB"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={handleAddSkill}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Add Skill
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        Press Enter or click "Add Skill" to add a new skill.
      </p>

      {/* Skills */}

      {formData.skills.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {formData.skills.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              <span>{item}</span>

              <button
                type="button"
                onClick={() => handleRemoveSkill(item)}
                className="text-lg font-bold text-blue-700 transition hover:text-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
          <p className="font-medium text-gray-700">No skills added yet</p>

          <p className="mt-1 text-sm text-gray-500">
            Add your technical skills to improve profile visibility.
          </p>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
