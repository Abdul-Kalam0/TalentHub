const RoleSelector = ({ role, onRoleChange }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-1.5">
      <div className="grid grid-cols-2 gap-1">
        {/* Applicant */}

        <button
          type="button"
          onClick={() => onRoleChange("applicant")}
          className={`
            rounded-xl
            px-4
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              role === "applicant"
                ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
                : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
            }
          `}
        >
          Applicant
        </button>

        {/* Recruiter */}

        <button
          type="button"
          onClick={() => onRoleChange("recruiter")}
          className={`
            rounded-xl
            px-4
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              role === "recruiter"
                ? "bg-white text-blue-600 shadow-lg shadow-blue-100"
                : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
            }
          `}
        >
          Recruiter
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
