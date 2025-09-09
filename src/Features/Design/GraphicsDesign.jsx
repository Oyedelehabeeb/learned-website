import { FiArrowLeft } from "react-icons/fi";
import {
  FaPalette,
  FaPaintBrush,
  FaImage,
  FaLayerGroup,
  FaRocket,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useGraphicsDesign } from "./useGraphicsDesign";
import { useGraphicsDesignInstructors } from "./useGraphicsDesignInstructors";
import { useFeaturedGraphicsDesign } from "./useFeaturedGraphicsDesign";
import CourseOperations from "../../Ui/CourseOperations";
import Pagination from "../../Ui/Pagination";
import InstructorsPagination from "./../../Ui/InstructorsPagination";
import Loader from "./../../Ui/Loader";
import CourseLists from "../../Ui/CourseLists";
import FeaturedCourse from "../../Ui/FeaturedCourse";
import InstructorsLists from "../../Ui/InstructorsLists";

function GraphicsDesign() {
  const [searchParams] = useSearchParams();
  const { graphicsDesign, count, isLoading: isLoading1 } = useGraphicsDesign();
  const {
    graphicsDesignInstructors,
    count: count1,
    isLoading: isLoading2,
  } = useGraphicsDesignInstructors();
  const { featuredGraphicsDesign, isLoading: isLoading3 } =
    useFeaturedGraphicsDesign();

  // SORTING

  const sortBy = searchParams.get("sortBy") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCourses = graphicsDesign?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-600 via-orange-600 to-yellow-600 text-white py-20 px-6">
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
                  <FaPalette className="text-2xl text-white" />
                </div>
                <div className="text-orange-200 font-medium">
                  Graphics Design
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Graphics Design & Illustration
                <span className="block text-orange-200">Courses</span>
              </h1>

              <p className="text-orange-100 text-lg leading-relaxed max-w-2xl">
                Create stunning visual communications that captivate and inspire
                audiences
              </p>

              <div className="flex items-center gap-6 text-orange-200">
                <div className="flex items-center gap-2">
                  <FaPaintBrush className="text-sm" />
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

            {/* Right side - Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaPaintBrush,
                  title: "Digital Illustration",
                  desc: "Master drawing techniques",
                },
                {
                  icon: FaLayerGroup,
                  title: "Brand Identity",
                  desc: "Create visual systems",
                },
                {
                  icon: FaImage,
                  title: "Print & Digital",
                  desc: "Design for all media",
                },
                {
                  icon: FaStar,
                  title: "Best Practices",
                  desc: "Industry standards",
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
        <div className="bg-gradient-to-r from-rose-600/10 to-orange-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="text-3xl text-rose-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {graphicsDesignInstructors?.map((instructor, index) => (
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

export default GraphicsDesign;
