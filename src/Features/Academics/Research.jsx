import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import CourseOperations from "../../Ui/CourseOperations";
import CourseLists from "../../Ui/CourseLists";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "../../Ui/InstructorsPagination";

import { useResearch } from "./useResearch";
import { useFeaturedResearchPaper } from "./useFeaturedResearch";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useResearchPapersInstructors } from "./useResearchPapersInstructors";

function Research() {
  const [searchParams] = useSearchParams();

  const { research, count, isLoading: isLoading1 } = useResearch();
  const {
    researchInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useResearchPapersInstructors();
  const { featuredResearchPaper, isLoading: isLoading3 } =
    useFeaturedResearchPaper(5);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = research?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen p-6 space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <Link
          to="/academics/academics-hero"
          className="p-2 bg-gray-100 rounded-md hover:bg-gray-300 transition"
        >
          <FiArrowLeft />
        </Link>
        <h1 className="font-semibold text-xs md:text-3xl">
          Research Paper Writing Courses ({count})
        </h1>
        <div className="space-x-4 flex">
          <CourseOperations />
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {sortedCourses?.map((course, index) => (
          <CourseLists course={course} key={index} />
        ))}
      </div>

      {/* PAGINATION */}
      <div>
        <Pagination count={count} />
      </div>

      <div>
        {featuredResearchPaper ? (
          <FeaturedCourse featured={featuredResearchPaper} />
        ) : (
          <p>No featured cryptocurrency available.</p>
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 mt-10">Popular Instructors</h1>
        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-11">
          {researchInstructors?.map((instructor, index) => (
            <InstructorsLists instructor={instructor} key={index} />
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div>
        <InstructorsPagination count={count1} />
      </div>
    </div>
  );
}

export default Research;
