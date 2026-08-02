import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookmarks } from "../../redux/bookmarks/bookmarksThunks";

import BookmarkHeader from "../../components/applicant/bookmarkPage/BookmarkHeader";
import BookmarkGrid from "../../components/applicant/bookmarkPage/BookmarkGrid";
import EmptyBookmarks from "../../components/applicant/bookmarkPage/EmptyBookmarks";
import LoadingBookmarks from "../../components/applicant/bookmarkPage/LoadingBookmarks";

const BookmarkPage = () => {
  const dispatch = useDispatch();

  const { bookmarks, fetchLoading } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  if (fetchLoading) {
    return <LoadingBookmarks />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}

      <BookmarkHeader totalBookmarks={bookmarks.length} />

      {/* Bookmarks */}

      <section className="mt-8">
        {bookmarks.length > 0 ? (
          <BookmarkGrid bookmarks={bookmarks} />
        ) : (
          <EmptyBookmarks />
        )}
      </section>
    </div>
  );
};

export default BookmarkPage;
