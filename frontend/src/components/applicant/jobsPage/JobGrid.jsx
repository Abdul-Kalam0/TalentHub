import JobCard from "./JobCard";

const JobGrid = ({ jobs, bookmarks }) => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {jobs.map((job) => {
        const bookmark = bookmarks.find(
          (bookmark) => bookmark.job._id === job._id,
        );

        return <JobCard key={job._id} job={job} bookmark={bookmark} />;
      })}
    </div>
  );
};

export default JobGrid;
