import { Link, useSearchParams } from "react-router-dom";
import { useGameDevelopment } from "./useGameDevelopment";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaGamepad,
  FaCube,
  FaCode,
  FaPalette,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";
import { useGameDevelopmentInstructors } from "./useGameDevInstructors";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import { useFeaturedGameDev } from "./useFeaturedGameDev";
import CourseOperations from "../../Ui/CourseOperations";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "./../../Ui/InstructorsPagination";
import Loader from "../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import InstructorsLists from "../../Ui/InstructorsLists";

function GameDevelopment() {
  const [searchParams] = useSearchParams();
  const {
    gameDevelopment,
    count,
    isLoading: isLoading1,
  } = useGameDevelopment();
  const {
    gameDevInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useGameDevelopmentInstructors();
  const { featuredGameDev, isLoading: isLoading3 } = useFeaturedGameDev();

  // SORTING
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = gameDevelopment?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/development/development-hero"
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl hover:bg-opacity-30 transition-all duration-300"
            >
              <FiArrowLeft className="text-white" />
              <span className="text-white font-medium">
                Back to Development
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <FaGamepad className="text-2xl text-white" />
                </div>
                <div className="text-purple-200 font-medium">
                  Game Development
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Game Development
                <span className="block text-purple-200">Courses</span>
              </h1>

              <p className="text-purple-100 text-lg leading-relaxed max-w-2xl">
                Create immersive gaming experiences with cutting-edge
                development tools and techniques. Master Unity, Unreal Engine,
                and modern game programming concepts.
              </p>

              <div className="flex items-center gap-6 text-purple-200">
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
                  icon: FaCube,
                  title: "3D Programming",
                  desc: "Unity & Unreal Engine mastery",
                },
                {
                  icon: FaCode,
                  title: "Game Logic",
                  desc: "Programming game mechanics",
                },
                {
                  icon: FaPalette,
                  title: "Game Design",
                  desc: "Visual and audio design",
                },
                {
                  icon: FaStar,
                  title: "Publishing",
                  desc: "Launch your games",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-purple-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-200 text-sm">{item.desc}</p>
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
              Comprehensive game development courses from indie games to AAA
              studio techniques
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
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Top-rated game development courses that launch successful careers
            </p>
          </div>
          {featuredGameDev?.map((featured, index) => (
            <FeaturedCourse featured={featured} key={index} />
          ))}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaGamepad className="text-3xl text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gameDevInstructors?.map((instructor, index) => (
              <InstructorsLists instructor={instructor} key={index} />
            ))}
          </div>
        </div>

        {/* Instructors Pagination */}
        <div className="mt-8 flex justify-center">
          <InstructorsPagination count={count1} />
        </div>
      </div>
    </div>
  );
}

export default GameDevelopment;
