import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartPie,
  FaBalanceScale,
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
import { useAccounting } from "./useAccounting";
import { useFeaturedAccounting } from "./useFeaturedAccounting";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useAccountingInstructors } from "./useAccountingInstructors";

function Accounting() {
  const [searchParams] = useSearchParams();

  const { accounting, count, isLoading: isLoading1 } = useAccounting();
  const {
    accountingInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useAccountingInstructors();
  const { featuredAccounting, isLoading: isLoading3 } =
    useFeaturedAccounting(2);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = accounting?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const accountingFeatures = [
    {
      icon: FaCalculator,
      title: "Financial Accounting",
      desc: "Master bookkeeping, journal entries, and financial statements",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Tax Preparation",
      desc: "Learn tax laws, deductions, and professional tax preparation",
    },
    {
      icon: FaChartPie,
      title: "Management Accounting",
      desc: "Understand cost analysis and managerial decision making",
    },
    {
      icon: FaBalanceScale,
      title: "Auditing & Compliance",
      desc: "Explore auditing standards and regulatory compliance",
    },
  ];

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20 px-6">
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
                <FaCalculator className="text-3xl text-green-300" />
                <span className="text-green-200 font-medium">
                  Professional Accounting
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Financial
                <br />
                <span className="text-green-300">Accounting Skills</span>
              </h1>
              <p className="text-xl text-emerald-100 max-w-xl">
                Learn comprehensive accounting principles, tax preparation, and
                financial analysis from certified professionals.
              </p>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {accountingFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-green-200 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-emerald-200 text-sm">{item.desc}</p>
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

          {/* Courses Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination count={count} />
          </div>
        </div>

        {/* Featured Course */}
        <div className="mb-16">
          {featuredAccounting ? (
            <FeaturedCourse featured={featuredAccounting} />
          ) : (
            <p>No featured accounting course available.</p>
          )}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaCalculator className="text-3xl text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {accountingInstructors?.map((instructor, index) => (
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

export default Accounting;
