const Pagination = ({ pagination, setFilters }) => {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > pagination.totalPages ||
      page === pagination.currentPage
    ) {
      return;
    }

    setFilters((previous) => ({
      ...previous,
      page,
    }));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {/* Previous */}

      <button
        type="button"
        disabled={!pagination.hasPreviousPage}
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}

      {Array.from(
        { length: pagination.totalPages },
        (_, index) => index + 1,
      ).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(page)}
          className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
            pagination.currentPage === page
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}

      <button
        type="button"
        disabled={!pagination.hasNextPage}
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
