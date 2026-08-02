import JobForm from "../../components/recruiter/jobForm/JobForm";

const CreateJobPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Header */}

      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
          Create Job
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Fill in the details below to publish a new job posting.
        </p>
      </div>

      {/* Job Form */}

      <JobForm mode="create" />
    </div>
  );
};

export default CreateJobPage;
