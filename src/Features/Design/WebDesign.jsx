import { FiArrowLeft } from "react-icons/fi";
import {
  FaCode,
  FaDesktop,
  FaMobile,
  FaRocket,
  FaLaptopCode,
  FaBolt,
  FaUsers,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useWebDesign } from "./useWebDesign";
import { useWebDesignInstructors } from "./useWebDesignInstructors";
import { useFeaturedWebDesign } from "./useFeaturedWebDesign";
import CourseOperations from "../../Ui/CourseOperations";
import Pagination from "./../../Ui/Pagination";
import InstructorsPagination from "./../../Ui/InstructorsPagination";
import Loader from "./../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import InstructorsLists from "../../Ui/InstructorsLists";

function WebDesign() {
  const [searchParams] = useSearchParams();
  const { webDesign, count, isLoading: isLoading1 } = useWebDesign();
  const {
    webDesignInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useWebDesignInstructors();
  const { featuredWebDesign, isLoading: isLoading3 } = useFeaturedWebDesign();

  // SORTING

  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = webDesign?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/design/design-hero"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <FiArrowLeft className="text-lg" />
              <span className="font-medium">Back to Design</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <FaDesktop className="text-2xl text-white" />
                </div>
                <div className="text-cyan-200 font-medium">Web Design</div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Web Design
                <span className="block text-cyan-200">Courses</span>
              </h1>

              <p className="text-cyan-100 text-lg leading-relaxed max-w-2xl">
                Craft beautiful, responsive websites that deliver exceptional
                user experiences
              </p>

              <div className="flex items-center gap-6 text-cyan-200">
                <div className="flex items-center gap-2">
                  <FaCode className="text-sm" />
                  <span>{count} Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBolt className="text-sm" />
                  <span>Certification</span>
                </div>
              </div>
            </div>

            {/* Right side - Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaMobile,
                  title: "Responsive Design",
                  desc: "Work on all devices",
                },
                {
                  icon: FaCode,
                  title: "Modern CSS",
                  desc: "Advanced techniques",
                },
                {
                  icon: FaLaptopCode,
                  title: "Interactive Web",
                  desc: "Engaging websites",
                },
                {
                  icon: FaBolt,
                  title: "Best Practices",
                  desc: "Industry standards",
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
        {/* Course Operations */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Available Courses ({count})
          </h2>
          <CourseOperations />
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sortedCourses?.map((course, index) => (
            <CourseLists course={course} key={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mb-16">
          <Pagination count={count} />
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          {featuredWebDesign?.map((featured, index) => (
            <FeaturedCourse featured={featured} key={index} />
          ))}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaBolt className="text-3xl text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {webDesignInstructors?.map((instructor, index) => (
              <InstructorsLists instructor={instructor} key={index} />
            ))}
          </div>
        </div>

        {/* Instructors Pagination */}
        <div className="mt-8">
          <InstructorsPagination count={count1} />
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
