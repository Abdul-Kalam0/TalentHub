const ApplicantSkills = ({ application }) => {
  const { applicant } = application;

  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
        Skills
      </h3>

      {applicant.skills?.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {applicant.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm italic text-gray-400">No skills added</p>
      )}
    </div>
  );
};

export default ApplicantSkills;
