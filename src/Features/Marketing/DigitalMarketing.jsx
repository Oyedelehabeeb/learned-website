import { FiArrowLeft } from "react-icons/fi";
import {
  FaLaptop,
  FaSearch,
  FaEnvelope,
  FaChartBar,
  FaUsers,
  FaStar,
  FaMousePointer,
  FaBullhorn,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useDigitalMarketing } from "./useDigitalMarketing";
import { useDigitalMarketingInstructors } from "./useDigitalMarketingInstructors";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import CourseOperations from "../../Ui/CourseOperations";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "./../../Ui/InstructorsPagination";
import Loader from "../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useFeaturedDataScience } from "./../Development/useFeaturedDataScience";

function DigitalMarketing() {
  const [searchParams] = useSearchParams();
  const {
    digitalMarketing,
    count,
    isLoading: isLoading1,
  } = useDigitalMarketing();
  const {
    digitalMarketingInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useDigitalMarketingInstructors();
  const { featuredDataScience, isLoading: isLoading3 } =
    useFeaturedDataScience();

  // SORTING

  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = digitalMarketing?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/marketing/marketing-hero"
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl hover:bg-opacity-30 transition-all duration-300"
            >
              <FiArrowLeft className="text-white" />
              <span className="text-white font-medium">Back to Marketing</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <FaLaptop className="text-2xl text-white" />
                </div>
                <div className="text-green-200 font-medium">
                  Digital Marketing
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Digital Marketing
                <span className="block text-green-200">Courses</span>
              </h1>

              <p className="text-green-100 text-lg leading-relaxed max-w-2xl">
                Master comprehensive digital marketing strategies to reach
                audiences and drive conversions online
              </p>

              <div className="flex items-center gap-6 text-green-200">
                <div className="flex items-center gap-2">
                  <FaBullhorn className="text-sm" />
                  <span>{count} Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-sm" />
                  <span>Certification</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaSearch,
                  title: "SEO & SEM",
                  desc: "Search engine optimization",
                },
                {
                  icon: FaEnvelope,
                  title: "Email Marketing",
                  desc: "Build email campaigns",
                },
                {
                  icon: FaMousePointer,
                  title: "PPC Advertising",
                  desc: "Pay-per-click campaigns",
                },
                {
                  icon: FaChartBar,
                  title: "Analytics & ROI",
                  desc: "Measure campaign success",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-green-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-green-200 text-sm">{item.desc}</p>
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
        <div className="mb-16 flex justify-center">
          <Pagination count={count} />
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          {featuredDataScience?.map((featured, index) => (
            <FeaturedCourse featured={featured} key={index} />
          ))}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="text-3xl text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {digitalMarketingInstructors?.map((instructor, index) => (
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

export default DigitalMarketing;
