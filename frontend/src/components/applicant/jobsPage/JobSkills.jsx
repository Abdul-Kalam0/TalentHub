const JobSkills = ({ skills }) => {
  const visibleSkills = skills.slice(0, 4);
  const remainingSkills = skills.length - visibleSkills.length;

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-gray-700">Skills</h3>

      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}

        {remainingSkills > 0 && (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            +{remainingSkills}
          </span>
        )}
      </div>
    </div>
  );
};

export default JobSkills;
