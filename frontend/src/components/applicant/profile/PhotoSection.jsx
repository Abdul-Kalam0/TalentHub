import { useRef } from "react";

const PhotoSection = ({ photo, loading, onUpload }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onUpload(file);
  };

  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold text-gray-900 sm:text-2xl">
        Profile Photo
      </h2>

      <div className="rounded-xl border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}

          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <img
              src={
                photo ||
                "https://ui-avatars.com/api/?name=Applicant&background=random&size=200"
              }
              alt="Applicant"
              className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover sm:h-32 sm:w-32"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Profile Picture
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                Upload a professional profile photo to make a stronger first
                impression.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="w-full text-center md:w-auto md:text-right">
            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              type="button"
              disabled={loading}
              onClick={() => inputRef.current?.click()}
              className="
                w-full
                rounded-lg
                bg-blue-600
                px-8
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60
                md:w-auto
              "
            >
              {loading
                ? "Uploading..."
                : photo
                  ? "Update Photo"
                  : "Upload Photo"}
            </button>

            <p className="mt-3 text-sm text-gray-500">
              Supported formats: JPG, PNG, WEBP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
