import { useParams } from "react-router-dom";
import { useAllCourses } from "../Services/useAllCourses";
import PageNotFound from "./PageNotFound";
import Loader from "./Loader";
import {
  FaStar,
  FaUser,
  FaGlobe,
  FaUserGraduate,
  FaPlay,
  FaClock,
  FaBookmark,
  FaShare,
  FaCheck,
  FaChevronDown,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import { formatCurrency } from "./../Utils/helper";

const CourseDetails = () => {
  const { courseId } = useParams();

  const { allCourses, isLoading } = useAllCourses();

  const course = allCourses.find(
    (course) => course.courseId === Number(courseId)
  );

  if (isLoading) return <Loader />;
  if (!course) return <PageNotFound />;

  const {
    title,
    price,
    rating,
    instructor,
    language,
    student,
    description,
    imageUrl: image,
  } = course;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-customGray via-darkGray to-mediumGray text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Course Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-beige">
                  <FaBookmark className="text-sm" />
                  <span className="text-sm font-medium">Featured Course</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {title}
                </h1>

                <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                  {description.substring(0, 200)}...
                </p>
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(rating)
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{rating}</span>
                  <span className="text-gray-300">
                    ({Math.floor(Math.random() * 1000) + 500} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <FaUserGraduate className="text-sm" />
                  <span>{student} students</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <FaGlobe className="text-sm" />
                  <span>{language}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-beige to-gray-300 rounded-full flex items-center justify-center">
                  <FaUser className="text-customGray" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Instructor</p>
                  <p className="text-white font-semibold text-lg">
                    {instructor}
                  </p>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full">
                <div className="relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <FaPlay className="text-customGray text-xl ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-customGray">
                        {formatCurrency(price)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatCurrency(price * 1.4)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        30% OFF
                      </span>
                      <span className="text-red-500 text-sm font-medium">
                        Limited time offer!
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-customGray to-darkGray text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Enroll Now
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-pink-500 text-pink-500 rounded-xl hover:bg-pink-500 hover:text-white transition-all duration-300">
                        <FaHeart className="text-sm" />
                        Wishlist
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                        <FaShoppingCart className="text-sm" />
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Course Includes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">
                      This course includes:
                    </h4>
                    <div className="space-y-2">
                      {[
                        "12 hours on-demand video",
                        "45 downloadable resources",
                        "Full lifetime access",
                        "Access on mobile and TV",
                        "Certificate of completion",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <FaCheck className="text-green-500 text-sm" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Course Description
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {description}
                </p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Master the fundamentals and advanced concepts",
                  "Build real-world projects from scratch",
                  "Learn industry best practices and standards",
                  "Develop problem-solving skills",
                  "Gain hands-on experience with tools",
                  "Prepare for professional certification",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Introduction to the Course",
                    lessons: 5,
                    duration: "45 min",
                  },
                  {
                    title: "Getting Started with Basics",
                    lessons: 8,
                    duration: "2 hours",
                  },
                  {
                    title: "Intermediate Concepts",
                    lessons: 12,
                    duration: "3.5 hours",
                  },
                  {
                    title: "Advanced Techniques",
                    lessons: 10,
                    duration: "4 hours",
                  },
                  {
                    title: "Real-world Projects",
                    lessons: 6,
                    duration: "2.5 hours",
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <div className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-center gap-4">
                        <FaChevronDown className="text-gray-400 text-sm" />
                        <h3 className="font-semibold text-gray-800">
                          {section.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{section.lessons} lessons</span>
                        <FaClock className="text-xs" />
                        <span>{section.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                  <FaShare className="text-sm" />
                  Share Course
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <FaBookmark className="text-sm" />
                  Save for Later
                </button>
              </div>
            </div>

            {/* Course Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">
                Course Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Duration</span>
                  <span className="font-semibold">12.5 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Lessons</span>
                  <span className="font-semibold">41 lessons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Skill Level</span>
                  <span className="font-semibold">Beginner</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-semibold">March 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
