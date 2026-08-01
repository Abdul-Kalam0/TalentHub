const FormActions = ({ loading }) => {
  return (
    <section className="border-t border-gray-200 pt-8">
      <div className="flex items-center justify-between">
        {/* Helper Text */}

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Ready to save?
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Make sure your profile information is complete before saving.
          </p>
        </div>

        {/* Save Button */}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </section>
  );
};

export default FormActions;
