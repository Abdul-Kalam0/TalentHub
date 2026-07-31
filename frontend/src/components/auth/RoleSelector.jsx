const RoleSelector = ({ role, onRoleChange }) => {
  return (
    <div className="flex rounded-xl bg-gray-100 p-1">
      <button
        type="button"
        onClick={() => onRoleChange("applicant")}
        className={`flex-1 rounded-lg py-3 font-medium transition-all ${
          role === "applicant"
            ? "bg-white text-blue-600 shadow"
            : "text-gray-600"
        }`}
      >
        Applicant
      </button>

      <button
        type="button"
        onClick={() => onRoleChange("recruiter")}
        className={`flex-1 rounded-lg py-3 font-medium transition-all ${
          role === "recruiter"
            ? "bg-white text-blue-600 shadow"
            : "text-gray-600"
        }`}
      >
        Recruiter
      </button>
    </div>
  );
};

export default RoleSelector;
