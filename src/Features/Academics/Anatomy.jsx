import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaHeartbeat,
  FaBrain,
  FaEye,
  FaBone,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";
import CourseOperations from "../../Ui/CourseOperations";
import CourseLists from "../../Ui/CourseLists";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "../../Ui/InstructorsPagination";

import { useAnatomy } from "./useAnatomy";
import { useFeaturedAnatomy } from "./useFeaturedAnatomy";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useAnatomyInstructors } from "./useAnatomyInstructors";

function Anatomy() {
  const [searchParams] = useSearchParams();

  const { anatomy, count, isLoading: isLoading1 } = useAnatomy();
  const {
    anatomyInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useAnatomyInstructors();
  const { featuredAnatomy, isLoading: isLoading3 } = useFeaturedAnatomy(4);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = anatomy?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-700 to-rose-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/academics/academics-hero"
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl hover:bg-opacity-30 transition-all duration-300"
            >
              <FiArrowLeft className="text-white" />
              <span className="text-white font-medium">Back to Academics</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <FaHeartbeat className="text-2xl text-white" />
                </div>
                <div className="text-red-200 font-medium">Human Anatomy</div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Anatomy
                <span className="block text-red-200">Courses</span>
              </h1>

              <p className="text-red-100 text-lg leading-relaxed max-w-2xl">
                Explore the intricate structure of the human body through
                comprehensive anatomy courses. Master anatomical systems,
                physiological processes, and medical terminology.
              </p>

              <div className="flex items-center gap-6 text-red-200">
                <div className="flex items-center gap-2">
                  <FaBookOpen className="text-sm" />
                  <span>{count} Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-sm" />
                  <span>Certification</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaBrain,
                  title: "Neuroanatomy",
                  desc: "Study nervous system structure",
                },
                {
                  icon: FaHeartbeat,
                  title: "Cardiovascular",
                  desc: "Heart and circulatory system",
                },
                {
                  icon: FaBone,
                  title: "Musculoskeletal",
                  desc: "Bones, muscles, and joints",
                },
                {
                  icon: FaEye,
                  title: "Sensory Systems",
                  desc: "Eyes, ears, and sensation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-red-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-red-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Courses Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Available Courses ({count})
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive anatomy courses covering all major body systems and
              physiological processes
            </p>
          </div>

          {/* Course Operations */}
          <div className="flex justify-end mb-8">
            <CourseOperations />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses?.map((course, index) => (
              <CourseLists course={course} key={index} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Pagination count={count} />
          </div>
        </div>

        {/* Featured Courses */}
        {featuredAnatomy && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Courses
              </h2>
              <p className="text-gray-600 text-lg">
                Essential anatomy courses recommended by medical educators and
                professionals
              </p>
            </div>
            <FeaturedCourse featured={featuredAnatomy} />
          </div>
        )}

        {/* Instructors Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn from experienced anatomists, medical doctors, and healthcare
              educators
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {anatomyInstructors?.map((instructor, index) => (
                <InstructorsLists instructor={instructor} key={index} />
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <InstructorsPagination count={count1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anatomy;
