import BookmarkCard from "./BookmarkCard";

const BookmarkGrid = ({ bookmarks }) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
    </section>
  );
};

export default BookmarkGrid;
