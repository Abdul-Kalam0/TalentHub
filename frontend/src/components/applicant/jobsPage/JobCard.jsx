import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  createBookmark,
  deleteBookmark,
} from "../../../redux/bookmarks/bookmarksThunks";

import JobCardHeader from "./JobCardHeader";
import JobCardBody from "./JobCardBody";
import JobCardFooter from "./JobCardFooter";

const JobCard = ({ job, bookmark }) => {
  const dispatch = useDispatch();

  const handleBookmark = async () => {
    try {
      if (bookmark) {
        await dispatch(deleteBookmark(bookmark._id)).unwrap();

        toast.success("Job removed from saved jobs.");
      } else {
        await dispatch(createBookmark(job._id)).unwrap();

        toast.success("Job saved successfully.");
      }
    } catch (error) {
      toast.error(error || "Something went wrong.");
    }
  };

  return (
    <article
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Header */}

      <JobCardHeader
        job={job}
        bookmark={bookmark}
        onBookmark={handleBookmark}
      />

      {/* Body */}

      <JobCardBody job={job} />

      {/* Footer */}

      <JobCardFooter job={job} />
    </article>
  );
};

export default JobCard;
