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
    <div className="flex items-center justify-between mt-4 border border-solid border-x-8 p-3 border-darkGray">
      {/* Total Results */}
      <div className="mb-2 text-gray-700">
        {" "}
        Results: <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of {count} results
      </div>

      <div className="flex items-center space-x-5">
        {/* Previous Button */}
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50  disabled:cursor-not-allowed"
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
