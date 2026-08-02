import { useNavigate } from "react-router-dom";

const FormActions = ({ mode, loading }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        flex
        flex-col-reverse
        gap-3
        border-t
        border-gray-200
        pt-6
        sm:flex-row
        sm:justify-end
      "
    >
      {/* Cancel */}

      <button
        type="button"
        onClick={() => navigate("/recruiter/jobs")}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          px-6
          py-3
          text-sm
          font-semibold
          text-gray-700
          transition-all
          duration-200
          hover:bg-gray-100
          hover:shadow-sm
          sm:w-auto
        "
      >
        Cancel
      </button>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-blue-600
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-200
          hover:bg-blue-700
          hover:shadow-md
          focus:ring-4
          focus:ring-blue-200
          disabled:cursor-not-allowed
          disabled:opacity-60
          sm:w-auto
        "
      >
        {loading
          ? mode === "create"
            ? "Creating..."
            : "Updating..."
          : mode === "create"
            ? "Create Job"
            : "Update Job"}
      </button>
    </div>
  );
};

export default FormActions;
