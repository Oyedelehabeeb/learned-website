import { NavLink } from "react-router-dom";
import {
  FaBullhorn,
  FaHashtag,
  FaTag,
  FaRocket,
  FaStar,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";

function MarketingHero() {
  const marketingPaths = [
    {
      title: "Digital Marketing",
      description:
        "Master online marketing strategies and digital campaign management",
      icon: FaBullhorn,
      path: "/marketing/digital-marketing",
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600",
      strategies: ["SEO/SEM", "Email Marketing", "Analytics"],
    },
    {
      title: "Social Media Marketing",
      description:
        "Build engaging social media presence and drive audience growth",
      icon: FaHashtag,
      path: "/marketing/social-media-marketing",
      gradient: "from-blue-500 to-purple-500",
      hoverGradient: "from-blue-600 to-purple-600",
      strategies: [
        "Content Strategy",
        "Influencer Marketing",
        "Community Management",
      ],
    },
    {
      title: "Branding",
      description:
        "Create powerful brand identities and develop brand strategies",
      icon: FaTag,
      path: "/marketing/branding",
      gradient: "from-green-500 to-teal-500",
      hoverGradient: "from-green-600 to-teal-600",
      strategies: ["Brand Identity", "Positioning", "Brand Guidelines"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-customGray via-darkGray to-customGray overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 bg-opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-customGray to-darkGray rounded-2xl mb-8 shadow-2xl">
            <FaChartLine className="text-white text-3xl" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master the Art of
            <span className="block bg-gradient-to-r from-orange-400 via-blue-500 to-green-400 bg-clip-text text-transparent mt-2">
              Marketing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Drive growth and reach your audience with cutting-edge marketing
            strategies. From digital campaigns to brand building, master the
            skills that drive business success.
          </p>

          <div className="flex items-center justify-center gap-3 text-yellow-400 mb-12">
            <FaStar className="text-xl" />
            <span className="text-lg font-medium text-white">
              Choose Your Marketing Path
            </span>
            <FaStar className="text-xl" />
          </div>
        </div>

        {/* Marketing Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {marketingPaths.map((path, index) => {
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
                        <FaRocket className="text-sm" />
                        <span className="text-sm font-medium">
                          Drive Growth
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white text-opacity-90 mb-6 leading-relaxed text-center">
                      {path.description}
                    </p>

                    {/* Marketing strategies */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {path.strategies.map((strategy, strategyIndex) => (
                        <span
                          key={strategyIndex}
                          className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                        >
                          {strategy}
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
              Ready to Drive Business Growth?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join thousands of marketers who have accelerated their careers and
              driven measurable business results with our expert courses.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">40K+</div>
                <div className="text-sm text-gray-400">Marketers</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">180+</div>
                <div className="text-sm text-gray-400">Marketing Courses</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">94%</div>
                <div className="text-sm text-gray-400">Campaign Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingHero;
