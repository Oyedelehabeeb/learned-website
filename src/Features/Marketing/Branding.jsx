import { FiArrowLeft } from "react-icons/fi";
import {
  FaTags,
  FaPalette,
  FaEye,
  FaLightbulb,
  FaUsers,
  FaStar,
  FaPen,
  FaRocket,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useBranding } from "./useBranding";
import { useBrandingInstructors } from "./useBrandingInstructors";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import CourseOperations from "../../Ui/CourseOperations";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "./../../Ui/InstructorsPagination";
import Loader from "./../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import InstructorsLists from "./../../Ui/InstructorsLists";
import { useFeaturedGraphicsDesign } from "./../Design/useFeaturedGraphicsDesign";

function Branding() {
  const [searchParams] = useSearchParams();
  const { branding, count, isLoading: isLoading1 } = useBranding();
  const {
    brandingInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useBrandingInstructors();
  const { featuredGraphicsDesign, isLoading: isLoading3 } =
    useFeaturedGraphicsDesign();

  // SORTING

  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = branding?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
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
                  <FaTags className="text-2xl text-white" />
                </div>
                <div className="text-orange-200 font-medium">Branding</div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Branding
                <span className="block text-orange-200">Courses</span>
              </h1>

              <p className="text-orange-100 text-lg leading-relaxed max-w-2xl">
                Build powerful brand identities that resonate with audiences and
                drive business success
              </p>

              <div className="flex items-center gap-6 text-orange-200">
                <div className="flex items-center gap-2">
                  <FaPen className="text-sm" />
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
                  icon: FaPalette,
                  title: "Visual Identity",
                  desc: "Create brand aesthetics",
                },
                {
                  icon: FaEye,
                  title: "Brand Strategy",
                  desc: "Define brand positioning",
                },
                {
                  icon: FaLightbulb,
                  title: "Brand Messaging",
                  desc: "Craft compelling stories",
                },
                {
                  icon: FaRocket,
                  title: "Brand Launch",
                  desc: "Go-to-market strategies",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <item.icon className="text-3xl text-orange-200 mb-3" />
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
          {featuredGraphicsDesign?.map((featured, index) => (
            <FeaturedCourse featured={featured} key={index} />
          ))}
        </div>

        {/* Instructors Section */}
        <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="text-3xl text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {brandingInstructors?.map((instructor, index) => (
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

export default Branding;
