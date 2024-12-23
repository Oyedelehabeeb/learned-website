import { Link, useSearchParams } from "react-router-dom";
import { useMobileDevelopment } from "./useMobileDevelopment";
import { FiArrowLeft } from "react-icons/fi";
import { useMobileDevelopmentInstructors } from "./useMobileDevInstructors";
import { useFeaturedMobileDev } from "./useFeaturedMobileDev";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import CourseOperations from "../../Ui/CourseOperations";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "./../../Ui/InstructorsPagination";
import Loader from "../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import InstructorsLists from "../../Ui/InstructorsLists";
function MobileDevelopment() {
  const [searchParams] = useSearchParams();
  const {
    mobileDevelopment,
    count,
    isLoading: isLoading1,
  } = useMobileDevelopment();
  const {
    mobileDevInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useMobileDevelopmentInstructors();
  const { featuredMobileDev, isLoading: isLoading3 } = useFeaturedMobileDev();

  // SORTING

  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = mobileDevelopment?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen p-6 space-y-10">
      <div className="flex items-center justify-between">
        <Link
          to="/development/development-hero"
          className="p-2 bg-gray-100 rounded-md hover:bg-gray-300 transition"
        >
          <FiArrowLeft />
        </Link>
        <h1 className="font-semibold text-xs md:text-3xl">
          Mobile Development Courses ({count})
        </h1>
        <div className="space-x-8 flex">
          <CourseOperations />
        </div>
      </div>
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
        {featuredMobileDev?.map((featured, index) => (
          <FeaturedCourse featured={featured} key={index} />
        ))}
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4 mt-10">Popular Instructors</h1>
        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-11">
          {mobileDevInstructors?.map((instructor, index) => (
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

export default MobileDevelopment;
