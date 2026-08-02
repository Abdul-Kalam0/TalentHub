const FormActions = ({ loading, isEditing, setIsEditing }) => {
  return (
    <section className="border-t border-gray-200 pt-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {isEditing
              ? "Ready to save your profile?"
              : "Your profile is up to date"}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            {isEditing
              ? "Review your information before saving your changes."
              : "Click Edit Profile whenever you want to update your information."}
          </p>
        </div>

        {/* Right */}

        {isEditing ? (
          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-blue-700
              hover:shadow-md
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Saving Changes..." : "Save Changes"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-blue-700
              hover:shadow-md
            "
          >
            Edit Profile
          </button>
        )}
      </div>
    </section>
  );
};

export default FormActions;
