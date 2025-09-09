import { useParams, useNavigate } from "react-router-dom";
import { useAllInstructors } from "../Services/useAllInstructors";
import Loader from "./Loader";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaUsers,
  FaStar,
  FaAward,
  FaBook,
  FaChalkboardTeacher,
  FaCertificate,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function InstructorsDetails() {
  const { instructorId } = useParams();
  const navigate = useNavigate();
  const { allInstructors, isLoading } = useAllInstructors();
  const instructor = allInstructors?.find(
    (instructor) => instructor.instructorId === Number(instructorId)
  );

  const {
    name,
    instructorTitle,
    numCourse,
    students,
    rating,
    description,
    avatarUrl,
  } = instructor || {};

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl hover:bg-opacity-30 transition-all duration-300"
            >
              <FiArrowLeft className="text-white" />
              <span className="text-white font-medium">Go Back</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <FaChalkboardTeacher className="text-2xl text-white" />
                </div>
                <div className="text-blue-200 font-medium">
                  Instructor Profile
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {name}
                <span className="block text-blue-200 text-2xl md:text-3xl mt-2">
                  {instructorTitle}
                </span>
              </h1>

              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                Experienced educator and industry expert dedicated to helping
                students achieve their learning goals
              </p>

              <div className="flex items-center gap-6 text-blue-200">
                <div className="flex items-center gap-2">
                  <FaBook className="text-sm" />
                  <span>{numCourse} Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm" />
                  <span>{students} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-sm" />
                  <span>{rating} Rating</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <img
                    src={avatarUrl}
                    alt={name}
                    className="w-72 h-72 rounded-full object-cover border-4 border-white border-opacity-30"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                  <FaAward className="text-3xl text-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: FaBook,
              title: "Courses",
              value: numCourse,
              color: "from-blue-500 to-blue-600",
              bgColor: "from-blue-500/10 to-blue-600/10",
            },
            {
              icon: FaUsers,
              title: "Students",
              value: students,
              color: "from-indigo-500 to-indigo-600",
              bgColor: "from-indigo-500/10 to-indigo-600/10",
            },
            {
              icon: FaStar,
              title: "Rating",
              value: rating,
              color: "from-yellow-500 to-yellow-600",
              bgColor: "from-yellow-500/10 to-yellow-600/10",
            },
            {
              icon: FaCertificate,
              title: "Experience",
              value: "5+ Years",
              color: "from-purple-500 to-purple-600",
              bgColor: "from-purple-500/10 to-purple-600/10",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${stat.bgColor} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-3xl text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              About the Instructor
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Expertise Areas
                </h3>
                <div className="space-y-2">
                  {[
                    "Advanced Programming Concepts",
                    "Industry Best Practices",
                    "Project-Based Learning",
                    "Career Development",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Teaching Philosophy
                </h3>
                <p className="text-gray-700">
                  Believes in hands-on learning and practical application of
                  concepts. Focuses on building real-world skills that students
                  can immediately apply in their careers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <FiMail className="text-3xl text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <FiMail className="text-blue-600" />
                <span className="text-gray-700">instructor@example.com</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <FiPhone className="text-blue-600" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                <FiMapPin className="text-blue-600" />
                <span className="text-gray-700">San Francisco, CA</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Connect on Social
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, color: "bg-blue-600" },
                  { icon: FaTwitter, color: "bg-blue-400" },
                  { icon: FaGithub, color: "bg-gray-800" },
                ].map((social, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="text-white text-xl" />
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                Feel free to reach out for course inquiries or professional
                discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorsDetails;
