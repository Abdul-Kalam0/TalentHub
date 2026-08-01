import { useRef } from "react";

const ResumeSection = ({ resume, loading, onUpload }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    onUpload(file);
  };

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Resume <span className="text-red-500">*</span>
      </h2>

      <div className="rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Resume Details */}

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Resume Document
            </h3>

            {resume ? (
              <>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-blue-600 hover:underline"
                >
                  📄 View Uploaded Resume
                </a>

                <p className="mt-2 text-sm text-green-600">
                  Resume uploaded successfully.
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 text-gray-500">
                  Upload your latest resume so recruiters can evaluate your
                  profile.
                </p>

                <p className="mt-2 text-sm text-red-500">Resume is required.</p>
              </>
            )}
          </div>

          {/* Upload Button */}

          <div>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              type="button"
              disabled={loading}
              onClick={() => inputRef.current?.click()}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Uploading..."
                : resume
                  ? "Replace Resume"
                  : "Upload Resume"}
            </button>

            <p className="mt-3 text-sm text-gray-500">
              Supported formats: PDF, DOC, DOCX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
