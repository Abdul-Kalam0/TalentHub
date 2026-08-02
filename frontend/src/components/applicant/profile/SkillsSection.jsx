const SkillsSection = ({ formData, setFormData, skill, setSkill }) => {
  // ==========================
  // Add Skill
  // ==========================

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

  // ==========================
  // Remove Skill
  // ==========================

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
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Skills <span className="text-red-500">*</span>
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Highlight your technical skills to help recruiters find you.
          </p>
        </div>

        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {formData.skills.length} Skill
          {formData.skills.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Add Skill */}

      <div className="flex flex-col gap-3 sm:flex-row">
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
          className="
            flex-1
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />

        <button
          type="button"
          onClick={handleAddSkill}
          className="
            w-full
            rounded-xl
            bg-blue-600
            px-7
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            sm:w-auto
          "
        >
          Add Skill
        </button>
      </div>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        Press <strong>Enter</strong> or click <strong>Add Skill</strong> to add
        a new skill.
      </p>

      {/* Skills */}

      {formData.skills.length > 0 ? (
        <div className="mt-7 flex flex-wrap gap-3">
          {formData.skills.map((item) => (
            <div
              key={item}
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                transition
              "
            >
              <span className="break-all">{item}</span>

              <button
                type="button"
                onClick={() => handleRemoveSkill(item)}
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-red-100
                  hover:text-red-600
                "
              >
                ×
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-7 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-8 text-center sm:px-6 sm:py-10">
          <h3 className="text-lg font-semibold text-gray-900">
            No Skills Added
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Add your technical skills to improve profile visibility and help
            recruiters match you with relevant opportunities.
          </p>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
