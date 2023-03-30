import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
export function Pagination({ itemsPerPage, totalItems, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      paginate(nextPage);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      paginate(prevPage);
    }
  };

  return (
    <nav>
      <div className="pagination flex justify-center ">
        <button onClick={handleBack} className="p-2 border-2 border-r-0 border-indigo-600 hover:bg-indigo-600 hover:text-white">
          <MdArrowBackIosNew />
        </button>
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <button
              href="#!"
              className={`${currentPage === number && "bg-indigo-500 text-white"} p-3 border-2 border-r-0 border-indigo-600 hover:bg-indigo-600 hover:text-white`}
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          </div>
        ))}
        <button onClick={handleNext} className="p-2 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white">
          <MdArrowForwardIos />
        </button>
      </div>
    </nav>
 );
}

export default Pagination; 