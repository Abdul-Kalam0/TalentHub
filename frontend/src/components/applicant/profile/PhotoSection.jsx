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
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Profile Photo
      </h2>

      <div className="rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}

          <div className="flex items-center gap-6">
            <img
              src={
                photo ||
                "https://ui-avatars.com/api/?name=Applicant&background=random&size=200"
              }
              alt="Applicant"
              className="h-32 w-32 rounded-full border-4 border-gray-200 object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Profile Picture
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Upload a professional profile photo to make a stronger first
                impression.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="text-center md:text-right">
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
              className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
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
