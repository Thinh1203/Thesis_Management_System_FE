const Paginate = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <div>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={pageNumber === currentPage}
            className={pageNumber === currentPage ? "p-2 border-2 text-white border-r-0 border-indigo-600 bg-indigo-600" : "p-2 border-2 border-r-0 border-indigo-600 hover:bg-indigo-600 hover:text-white" }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
}
 
export default Paginate;