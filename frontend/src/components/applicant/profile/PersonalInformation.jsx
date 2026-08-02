const PersonalInformation = ({ profile, formData, handleChange }) => {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-gray-900">
        Personal Information
      </h2>

      <div className="grid gap-7 md:grid-cols-2">
        {/* Full Name */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={profile?.user?.fullName || ""}
            disabled
            className="
              w-full
              cursor-not-allowed
              rounded-xl
              border
              border-gray-300
              bg-gray-100
              px-4
              py-3
              text-sm
              text-gray-500
            "
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            value={profile?.user?.email || ""}
            disabled
            className="
              w-full
              cursor-not-allowed
              rounded-xl
              border
              border-gray-300
              bg-gray-100
              px-4
              py-3
              text-sm
              text-gray-500
            "
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Enter your mobile number"
            className="
              w-full
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

          <p className="mt-2 text-xs text-gray-500">
            Enter a valid 10-digit mobile number.
          </p>
        </div>

        {/* Current Location */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Current Location <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            autoComplete="address-level2"
            placeholder="e.g. Noida, Uttar Pradesh"
            className="
              w-full
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

          <p className="mt-2 text-xs text-gray-500">
            Recruiters use your location to recommend nearby opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
