import React from "react";

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    return (
      <div className="flex items-center justify-center m-4">
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          className={`px-3 py-1 text-white bg-blue-700 rounded-md ml-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-900'}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-3 py-1 text-white bg-blue-700 rounded-md ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-900'}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  }
  