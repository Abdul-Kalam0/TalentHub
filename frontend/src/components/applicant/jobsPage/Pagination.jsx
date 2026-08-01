const Pagination = ({ pagination, filters, setFilters }) => {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page) => {
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
    <div className="mt-10 flex items-center justify-center gap-2">
      {/* Previous */}

      <button
        type="button"
        disabled={pagination.currentPage === 1}
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}

      {Array.from(
        {
          length: pagination.totalPages,
        },
        (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                pagination.currentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        },
      )}

      {/* Next */}

      <button
        type="button"
        disabled={pagination.currentPage === pagination.totalPages}
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
