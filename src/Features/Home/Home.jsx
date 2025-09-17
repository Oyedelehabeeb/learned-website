import { Link } from "react-router-dom";
import { useUser } from "./../Authentication/useUser";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBriefcase,
  FaDumbbell,
  FaChartLine,
  FaGraduationCap,
  FaRocket,
  FaStar,
} from "react-icons/fa";

function Home() {
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const fullName = user?.user_metadata?.fullName;

  const categories = [
    {
      title: "Development",
      description:
        "Learn the latest technologies in web and software development.",
      icon: FaCode,
      path: "/development",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-600 to-purple-700",
    },
    {
      title: "Design",
      description:
        "Master design principles and tools to create stunning visuals.",
      icon: FaPalette,
      path: "/design",
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "from-pink-600 to-rose-700",
    },
    {
      title: "Marketing",
      description:
        "Learn effective marketing strategies to grow your business.",
      icon: FaBullhorn,
      path: "/marketing",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
    },
    {
      title: "Business",
      description: "Develop essential business skills and strategies.",
      icon: FaBriefcase,
      path: "/business",
      gradient: "from-orange-500 to-amber-600",
      hoverGradient: "from-orange-600 to-amber-700",
    },
    {
      title: "Health & Fitness",
      description:
        "Enhance your well-being with fitness and nutrition courses.",
      icon: FaDumbbell,
      path: "/fitness",
      gradient: "from-red-500 to-pink-600",
      hoverGradient: "from-red-600 to-pink-700",
    },
    {
      title: "Accounting & Finance",
      description: "Learn financial principles and accounting practices.",
      icon: FaChartLine,
      path: "/finance",
      gradient: "from-indigo-500 to-blue-600",
      hoverGradient: "from-indigo-600 to-blue-700",
    },
    {
      title: "Teaching & Academics",
      description: "Enhance your teaching skills and academic knowledge.",
      icon: FaGraduationCap,
      path: "/academics",
      gradient: "from-purple-500 to-indigo-600",
      hoverGradient: "from-purple-600 to-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-customGray via-darkGray to-customGray">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white bg-opacity-20 rounded-full mb-4">
            <FaRocket className="text-white text-xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Welcome back,
            <span className="block text-beige mt-1">
              {fullname || fullName || "Learner"}!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Ready to continue your learning journey? Explore our course
            categories below.
          </p>
          <div className="flex items-center justify-center gap-2 text-beige">
            <FaStar className="text-yellow-400" />
            <span className="text-base">Start exploring below</span>
            <FaStar className="text-yellow-400" />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-beige bg-opacity-10 rounded-full animate-pulse"></div>
      </header>

      {/* Course Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a world of knowledge across diverse fields. Choose your
              path and start learning today.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-customGray to-darkGray mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${category.gradient} hover:${category.hoverGradient}`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative p-8 text-center text-white z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-2xl" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-100 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      to={category.path}
                      className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:scale-105 backdrop-blur-sm"
                    >
                      Explore Course
                      <FaRocket className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-darkGray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 text-beige">1000+</div>
              <div className="text-gray-300">Courses Available</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 text-beige">50K+</div>
              <div className="text-gray-300">Students Learning</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 text-beige">200+</div>
              <div className="text-gray-300">Expert Instructors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
