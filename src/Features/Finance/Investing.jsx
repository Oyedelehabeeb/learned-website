import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaChartLine,
  FaCoins,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";
import CourseOperations from "../../Ui/CourseOperations";
import CourseLists from "../../Ui/CourseLists";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "../../Ui/InstructorsPagination";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import { useInvesting } from "./useInvesting";
import { useFeaturedInvesting } from "./useFeaturedInvesting";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useInvestingInstructors } from "./useInvestingInstructors";

function Investing() {
  const [searchParams] = useSearchParams();

  const { investing, count, isLoading: isLoading1 } = useInvesting();
  const {
    investingInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useInvestingInstructors();
  const { featuredInvesting, isLoading: isLoading3 } = useFeaturedInvesting(2);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = investing?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const investingFeatures = [
    {
      icon: FaChartLine,
      title: "Stock Market Analysis",
      desc: "Learn technical and fundamental analysis techniques",
    },
    {
      icon: FaCoins,
      title: "Portfolio Management",
      desc: "Master diversification and risk management strategies",
    },
    {
      icon: FaBriefcase,
      title: "Investment Strategies",
      desc: "Understand value investing, growth stocks, and options",
    },
    {
      icon: FaChartLine,
      title: "Trading Techniques",
      desc: "Explore day trading, swing trading, and market timing",
    },
  ];

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/finance/finance-hero"
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <FiArrowLeft className="text-xl" />
              <span className="hidden sm:inline">Back to Finance</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaChartLine className="text-3xl text-blue-300" />
                <span className="text-blue-200 font-medium">
                  Investment & Trading
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Build Your
                <br />
                <span className="text-blue-300">Investment Portfolio</span>
              </h1>
              <p className="text-xl text-indigo-100 max-w-xl">
                Master stock market investing, trading strategies, and portfolio
                management from professional traders.
              </p>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {investingFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-blue-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-indigo-200 text-sm">{item.desc}</p>
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
                Professional investing and trading courses for all experience
                levels
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
          {featuredInvesting ? (
            <FeaturedCourse featured={featuredInvesting} />
          ) : (
            <p>No featured investing course available.</p>
          )}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaChartLine className="text-3xl text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {investingInstructors?.map((instructor, index) => (
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

export default Investing;
