import { useNavigate } from "react-router-dom";

const FormActions = ({ mode, loading }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-4 border-t border-gray-200 pt-6">
      {/* Cancel */}

      <button
        type="button"
        onClick={() => navigate("/recruiter/jobs")}
        className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Cancel
      </button>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
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
