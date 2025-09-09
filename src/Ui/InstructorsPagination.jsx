/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../Utils/constants";

function InstructorsPagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("pageInst", prev);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("pageInst", next);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow-lg border border-gray-200 px-8 py-4 min-w-[600px] w-full max-w-4xl">
      {/* Total Results */}
      <div className="text-gray-600 font-medium flex-shrink-0 mr-8">
        Results:{" "}
        <span className="font-semibold text-gray-800">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-800">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold text-gray-800">{count}</span> results
      </div>

      <div className="flex items-center gap-6">
        {/* Previous Button */}
        <button
          className="px-6 py-2 bg-gradient-to-r from-customGray to-darkGray text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-400 transition-all duration-300 font-medium"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page indicator */}
        <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium min-w-[80px] text-center">
          {currentPage} of {pageCount}
        </div>

        <button
          className="px-6 py-2 bg-gradient-to-r from-customGray to-darkGray text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-400 transition-all duration-300 font-medium"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default InstructorsPagination;
