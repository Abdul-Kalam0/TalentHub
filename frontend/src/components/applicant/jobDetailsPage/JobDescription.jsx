const JobDescription = ({ job }) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Job Description
      </h2>

      {job.description ? (
        <div className="prose prose-gray max-w-none leading-8">
          <p className="whitespace-pre-line text-gray-700">{job.description}</p>
        </div>
      ) : (
        <p className="text-gray-500">No job description has been provided.</p>
      )}
    </section>
  );
};

export default JobDescription;
