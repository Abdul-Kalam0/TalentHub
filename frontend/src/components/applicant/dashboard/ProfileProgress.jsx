const ProfileProgress = ({ progress = 80 }) => {
  return (
    <div>
      {/* Header */}

      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">
          Profile Completion
        </h3>

        <span className="text-sm font-bold text-blue-600">{progress}%</span>
      </div>

      {/* Progress Bar */}

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Footer */}

      <p className="mt-3 text-sm leading-6 text-gray-500">
        Complete your profile to improve your visibility and increase your
        chances of getting shortlisted.
      </p>
    </div>
  );
};

export default ProfileProgress;
