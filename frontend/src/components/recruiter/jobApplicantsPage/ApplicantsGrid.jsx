import ApplicantCard from "./ApplicantCard";

const ApplicantsGrid = ({ applicants }) => {
  return (
    <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
      {applicants.map((application) => (
        <ApplicantCard key={application._id} application={application} />
      ))}
    </div>
  );
};

export default ApplicantsGrid;
