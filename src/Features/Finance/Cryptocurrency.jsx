import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaBitcoin,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaGraduationCap,
  FaStar,
  FaBookOpen,
  FaCoins,
} from "react-icons/fa";
import CourseOperations from "../../Ui/CourseOperations";
import CourseLists from "../../Ui/CourseLists";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "../../Ui/InstructorsPagination";

import { useCryptocurrency } from "./useCryptocurrency";
import { useFeaturedCryptocurrency } from "./useFeaturedCryptocurrency";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useCryptocurrencyInstructors } from "./useCryptocurrencyInstructors";

function Cryptocurrency() {
  const [searchParams] = useSearchParams();

  const { cryptocurrency, count, isLoading: isLoading1 } = useCryptocurrency();
  const {
    cryptoInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useCryptocurrencyInstructors();
  const { featuredCryptocurrency, isLoading: isLoading3 } =
    useFeaturedCryptocurrency(2);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = cryptocurrency?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const cryptoFeatures = [
    {
      icon: FaBitcoin,
      title: "Blockchain Technology",
      desc: "Master blockchain fundamentals and cryptocurrency mechanics",
    },
    {
      icon: FaChartLine,
      title: "Trading Strategies",
      desc: "Learn professional crypto trading and market analysis",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Wallets",
      desc: "Understand crypto security and wallet management",
    },
    {
      icon: FaUsers,
      title: "DeFi & NFTs",
      desc: "Explore decentralized finance and digital assets",
    },
  ];

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20 px-6">
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
                <FaBitcoin className="text-3xl text-yellow-300" />
                <span className="text-yellow-200 font-medium">
                  Cryptocurrency & Blockchain
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Digital
                <br />
                <span className="text-yellow-300">Currency Trading</span>
              </h1>
              <p className="text-xl text-orange-100 max-w-xl">
                Learn cryptocurrency trading, blockchain technology, and digital
                asset management from industry experts.
              </p>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cryptoFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-yellow-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-orange-200 text-sm">{item.desc}</p>
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
                Comprehensive cryptocurrency and blockchain courses for all
                skill levels
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
          {featuredCryptocurrency ? (
            <FeaturedCourse featured={featuredCryptocurrency} />
          ) : (
            <p>No featured cryptocurrency course available.</p>
          )}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaCoins className="text-3xl text-yellow-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cryptoInstructors?.map((instructor, index) => (
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

export default Cryptocurrency;
