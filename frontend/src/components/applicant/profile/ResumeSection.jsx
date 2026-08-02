import { useRef } from "react";

const ResumeSection = ({ resume, loading, onUpload }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onUpload(file);
  };

  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-gray-900">
        Resume <span className="text-red-500">*</span>
      </h2>

      <div className="rounded-2xl border border-gray-200 p-5 sm:p-7">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left */}

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
                  className="mt-3 inline-flex items-center gap-2 break-all text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
                >
                  📄 View Uploaded Resume
                </a>

                <p className="mt-2 text-sm text-green-600">
                  Your resume has been uploaded successfully.
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                  Upload your latest resume so recruiters can review your
                  qualifications, experience, and technical skills.
                </p>

                <p className="mt-2 text-sm font-medium text-red-500">
                  Resume is required.
                </p>
              </>
            )}
          </div>

          {/* Right */}

          <div className="w-full text-center md:w-auto md:text-right">
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
              className="
                w-full
                rounded-xl
                bg-blue-600
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60
                md:w-auto
              "
            >
              {loading
                ? "Uploading..."
                : resume
                  ? "Update Resume"
                  : "Upload Resume"}
            </button>

            <p className="mt-3 text-xs text-gray-500">
              Supported formats: PDF, DOC, DOCX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
