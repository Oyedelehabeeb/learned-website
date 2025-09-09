import { NavLink } from "react-router-dom";
import {
  FaDumbbell,
  FaAppleAlt,
  FaBrain,
  FaHeart,
  FaLeaf,
  FaStar,
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";

function FitnessHero() {
  const fitnessPaths = [
    {
      title: "Fitness & Exercise",
      description:
        "Build strength, endurance, and achieve your physical fitness goals",
      icon: FaDumbbell,
      path: "/fitness/fitness-health",
      gradient: "from-red-500 to-pink-500",
      hoverGradient: "from-red-600 to-pink-600",
      aspects: ["Strength Training", "Cardio", "Flexibility", "Recovery"],
    },
    {
      title: "Nutrition & Diet",
      description:
        "Learn optimal nutrition strategies for health and performance",
      icon: FaAppleAlt,
      path: "/fitness/nutrition",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600",
      aspects: ["Meal Planning", "Supplements", "Weight Management"],
    },
    {
      title: "Mental Health",
      description:
        "Develop mental resilience and emotional well-being practices",
      icon: FaBrain,
      path: "/fitness/mental-health",
      gradient: "from-blue-500 to-purple-500",
      hoverGradient: "from-blue-600 to-purple-600",
      aspects: ["Stress Management", "Mindfulness", "Sleep Health"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-customGray via-darkGray to-customGray overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 bg-opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-customGray to-darkGray rounded-2xl mb-8 shadow-2xl">
            <FaHeart className="text-white text-3xl" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-red-400 via-green-500 to-blue-400 bg-clip-text text-transparent mt-2">
              Health & Wellness
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Embark on a holistic journey to optimal health with comprehensive
            courses in fitness, nutrition, and mental wellness. Build the
            healthy lifestyle you deserve.
          </p>

          <div className="flex items-center justify-center gap-3 text-yellow-400 mb-12">
            <FaStar className="text-xl" />
            <span className="text-lg font-medium text-white">
              Choose Your Wellness Path
            </span>
            <FaStar className="text-xl" />
          </div>
        </div>

        {/* Fitness Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {fitnessPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <NavLink key={index} to={path.path} className="group block">
                <div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${path.gradient} p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white bg-opacity-5 rounded-full translate-y-16 -translate-x-16"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and title */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm mb-4">
                        <IconComponent className="text-white text-2xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {path.title}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-white text-opacity-80">
                        <FaLeaf className="text-sm" />
                        <span className="text-sm font-medium">
                          Live Healthy
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white text-opacity-90 mb-6 leading-relaxed text-center">
                      {path.description}
                    </p>

                    {/* Health aspects */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {path.aspects.map((aspect, aspectIndex) => (
                        <span
                          key={aspectIndex}
                          className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                        >
                          {aspect}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center gap-2 text-white font-semibold group-hover:text-yellow-200 transition-colors duration-300">
                      <span>Explore Courses</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${path.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  ></div>
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join thousands of individuals who have transformed their health
              and achieved their wellness goals through our comprehensive
              programs.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">28K+</div>
                <div className="text-sm text-gray-400">Health Enthusiasts</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">110+</div>
                <div className="text-sm text-gray-400">Wellness Courses</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">96%</div>
                <div className="text-sm text-gray-400">Health Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessHero;
