import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import CourseOperations from "../../Ui/CourseOperations";
import CourseLists from "../../Ui/CourseLists";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "../../Ui/InstructorsPagination";

import { useFeaturedMedicalCoding } from "./useFeaturedMedicalCoding";
import { useMedicalCoding } from "./useMedicalCoding";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useMedicalCodingInstructors } from "./useMedicalCodingInstructors";

function MedicalCoding() {
  const [searchParams] = useSearchParams();

  const { medicalCoding, count, isLoading: isLoading1 } = useMedicalCoding();
  const {
    medicalCodingInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useMedicalCodingInstructors();
  const { featuredMedicalCoding, isLoading: isLoading3 } =
    useFeaturedMedicalCoding(5);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = medicalCoding?.sort(
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
        <h1 className="font-semibold text-3xl">
          Medical Coding Courses ({count})
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
        {featuredMedicalCoding ? (
          <FeaturedCourse featured={featuredMedicalCoding} />
        ) : (
          <p>No featured cryptocurrency available.</p>
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 mt-10">Popular Instructors</h1>
        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-11">
          {medicalCodingInstructors?.map((instructor, index) => (
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

export default MedicalCoding;
