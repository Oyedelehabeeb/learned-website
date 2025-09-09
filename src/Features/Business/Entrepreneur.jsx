import { FiArrowLeft } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaDollarSign,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";
import { useEntrepreneur } from "./useEntrepreneur";
import { useEntrepreneurInstructors } from "./useEntrepreneurInstructors";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import CourseOperations from "./../../Ui/CourseOperations";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "../../Ui/InstructorsPagination";
import Loader from "../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import InstructorsLists from "./../../Ui/InstructorsLists";
import { useFeaturedDataScience } from "./../Development/useFeaturedDataScience";

function Entrepreneur() {
  const [searchParams] = useSearchParams();
  const { entrepreneur, count, isLoading: isLoading1 } = useEntrepreneur();
  const {
    entrepreneurInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useEntrepreneurInstructors();
  const { featuredDataScience, isLoading: isLoading3 } =
    useFeaturedDataScience();

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = entrepreneur?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const entrepreneurFeatures = [
    {
      icon: FaRocket,
      title: "Startup Strategy",
      desc: "Learn how to launch and scale successful startups",
    },
    {
      icon: FaLightbulb,
      title: "Innovation & Ideas",
      desc: "Develop creative thinking and idea validation skills",
    },
    {
      icon: FaHandshake,
      title: "Networking & Partnerships",
      desc: "Build valuable connections and strategic partnerships",
    },
    {
      icon: FaDollarSign,
      title: "Funding & Investment",
      desc: "Understand venture capital, crowdfunding, and bootstrapping",
    },
  ];

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/business/business-hero"
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <FiArrowLeft className="text-xl" />
              <span className="hidden sm:inline">Back to Business</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaRocket className="text-3xl text-orange-300" />
                <span className="text-orange-200 font-medium">
                  Entrepreneurship
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Build Your
                <br />
                <span className="text-orange-300">Dream Business</span>
              </h1>
              <p className="text-xl text-red-100 max-w-xl">
                Learn from successful entrepreneurs and business leaders to
                start, grow, and scale your own venture.
              </p>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {entrepreneurFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-orange-200 mb-3" />
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
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Available Courses ({count})
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive entrepreneurship courses for aspiring business
                owners
              </p>
            </div>
            <CourseOperations />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses?.map((course, index) => (
              <CourseLists course={course} key={index} />
            ))}
          </div>

          {/* Courses Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination count={count} />
          </div>
        </div>

        {/* Featured Course */}
        <div className="mb-16">
          {featuredDataScience?.map((featured, index) => (
            <FeaturedCourse featured={featured} key={index} />
          ))}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaRocket className="text-3xl text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {entrepreneurInstructors?.map((instructor, index) => (
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

export default Entrepreneur;
