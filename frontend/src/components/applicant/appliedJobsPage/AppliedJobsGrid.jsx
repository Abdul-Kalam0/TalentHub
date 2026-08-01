import AppliedJobCard from "./AppliedJobCard";

const AppliedJobsGrid = ({ applications }) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {applications.map((application) => (
          <AppliedJobCard key={application._id} application={application} />
        ))}
      </div>
    </section>
  );
};

export default AppliedJobsGrid;
