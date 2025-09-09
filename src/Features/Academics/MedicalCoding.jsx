import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../Ui/Loader";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaCode,
  FaHospital,
  FaFileAlt,
  FaChartBar,
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

import { useFeaturedMedicalCoding } from "./useFeaturedMedicalCoding";
import { useMedicalCoding } from "./useMedicalCoding";
import InstructorsLists from "../../Ui/InstructorsLists";
import { useMedicalCodingInstructors } from "./useMedicalCodingInstructors";

function MedicalCoding() {
  const [searchParams] = useSearchParams();

  const { medicalCoding, count, isLoading: isLoading1 } = useMedicalCoding();
  const {
    medicalCodingInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useMedicalCodingInstructors();
  const { featuredMedicalCoding, isLoading: isLoading3 } =
    useFeaturedMedicalCoding(5);

  // SORTING LOGIC
  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = medicalCoding?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-700 to-teal-700 text-white">
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
                  <FaCode className="text-2xl text-white" />
                </div>
                <div className="text-green-200 font-medium">Medical Coding</div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Medical Coding
                <span className="block text-green-200">Courses</span>
              </h1>

              <p className="text-green-100 text-lg leading-relaxed max-w-2xl">
                Master the art of medical coding with comprehensive training in
                ICD-10, CPT, and HCPCS. Build expertise in healthcare
                documentation and medical billing systems.
              </p>

              <div className="flex items-center gap-6 text-green-200">
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
                  icon: FaHospital,
                  title: "Healthcare Systems",
                  desc: "Navigate medical environments",
                },
                {
                  icon: FaChartBar,
                  title: "Billing & Coding",
                  desc: "Master coding standards",
                },
                {
                  icon: FaFileAlt,
                  title: "Documentation",
                  desc: "Accurate record keeping",
                },
                {
                  icon: FaStar,
                  title: "Compliance",
                  desc: "Regulatory requirements",
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
        {/* Courses Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Available Courses ({count})
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive medical coding courses designed for healthcare
              professionals and aspiring coders
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
        {featuredMedicalCoding && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Courses
              </h2>
              <p className="text-gray-600 text-lg">
                Top-rated courses that provide exceptional medical coding
                education
              </p>
            </div>
            <FeaturedCourse featured={featuredMedicalCoding} />
          </div>
        )}

        {/* Instructors Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn from certified medical coding professionals and healthcare
              industry experts
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {medicalCodingInstructors?.map((instructor, index) => (
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

export default MedicalCoding;
