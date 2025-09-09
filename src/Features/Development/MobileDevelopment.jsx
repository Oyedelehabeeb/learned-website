import { Link, useSearchParams } from "react-router-dom";
import { useMobileDevelopment } from "./useMobileDevelopment";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaMobile,
  FaAndroid,
  FaApple,
  FaReact,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 text-white">
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
                  <FaMobile className="text-2xl text-white" />
                </div>
                <div className="text-cyan-200 font-medium">
                  Mobile Development
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Mobile Development
                <span className="block text-cyan-200">Courses</span>
              </h1>

              <p className="text-cyan-100 text-lg leading-relaxed max-w-2xl">
                Build powerful mobile applications for iOS and Android
                platforms. Master React Native, Flutter, Swift, and Kotlin
                development.
              </p>

              <div className="flex items-center gap-6 text-cyan-200">
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
                  icon: FaApple,
                  title: "iOS Development",
                  desc: "Swift & SwiftUI mastery",
                },
                {
                  icon: FaAndroid,
                  title: "Android Development",
                  desc: "Kotlin & Java expertise",
                },
                {
                  icon: FaReact,
                  title: "Cross-Platform",
                  desc: "React Native & Flutter",
                },
                {
                  icon: FaStar,
                  title: "App Store",
                  desc: "Publishing & optimization",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-cyan-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cyan-200 text-sm">{item.desc}</p>
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
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Available Courses ({count})
            </h2>
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
              Industry-leading mobile development courses for modern app
              creation
            </p>
          </div>
          {featuredMobileDev?.map((featured, index) => (
            <FeaturedCourse featured={featured} key={index} />
          ))}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaMobile className="text-3xl text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mobileDevInstructors?.map((instructor, index) => (
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

export default MobileDevelopment;
