import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaFileAlt,
  FaSearch,
  FaBook,
  FaPen,
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

import { useResearch } from "./useResearch";
import { useFeaturedResearchPaper } from "./useFeaturedResearch";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useResearchPapersInstructors } from "./useResearchPapersInstructors";

function Research() {
  const [searchParams] = useSearchParams();

  const { research, count, isLoading: isLoading1 } = useResearch();
  const {
    researchInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useResearchPapersInstructors();
  const { featuredResearchPaper, isLoading: isLoading3 } =
    useFeaturedResearchPaper(5);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = research?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-700 to-indigo-700 text-white">
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
                  <FaFileAlt className="text-2xl text-white" />
                </div>
                <div className="text-purple-200 font-medium">
                  Research Paper Writing
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Research Paper
                <span className="block text-purple-200">Writing Courses</span>
              </h1>

              <p className="text-purple-100 text-lg leading-relaxed max-w-2xl">
                Master the art of academic writing and research methodology.
                Learn to craft compelling research papers, conduct literature
                reviews, and publish in peer-reviewed journals.
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
                  icon: FaSearch,
                  title: "Research Methods",
                  desc: "Systematic investigation techniques",
                },
                {
                  icon: FaPen,
                  title: "Academic Writing",
                  desc: "Scholarly writing skills",
                },
                {
                  icon: FaBook,
                  title: "Literature Review",
                  desc: "Critical analysis methods",
                },
                {
                  icon: FaStar,
                  title: "Publication",
                  desc: "Journal submission process",
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
              Comprehensive research writing courses for students, academics,
              and research professionals
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
        {featuredResearchPaper && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Courses
              </h2>
              <p className="text-gray-600 text-lg">
                Highly-rated research writing courses that enhance your academic
                writing skills
              </p>
            </div>
            <FeaturedCourse featured={featuredResearchPaper} />
          </div>
        )}

        {/* Instructors Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn from published researchers, academic writers, and university
              professors
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchInstructors?.map((instructor, index) => (
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

export default Research;
