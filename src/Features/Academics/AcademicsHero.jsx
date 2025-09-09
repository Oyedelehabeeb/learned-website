import { NavLink } from "react-router-dom";
import {
  FaFlask,
  FaStethoscope,
  FaFileMedical,
  FaBone,
  FaGraduationCap,
  FaBookOpen,
  FaStar,
  FaArrowRight,
  FaMicroscope,
} from "react-icons/fa";

function AcademicsHero() {
  const academicPaths = [
    {
      title: "Clinical Research",
      description:
        "Master the fundamentals of clinical research methodology and data analysis",
      icon: FaFlask,
      path: "/academics/clinical-research",
      gradient: "from-emerald-500 to-teal-500",
      hoverGradient: "from-emerald-600 to-teal-600",
      subjects: ["Research Methods", "Data Analysis", "Ethics"],
    },
    {
      title: "Medical Coding",
      description:
        "Learn medical coding systems and healthcare documentation standards",
      icon: FaStethoscope,
      path: "/academics/medical-coding",
      gradient: "from-blue-500 to-indigo-500",
      hoverGradient: "from-blue-600 to-indigo-600",
      subjects: ["ICD-10", "CPT Codes", "Healthcare"],
    },
    {
      title: "Research Paper Writing",
      description:
        "Develop advanced academic writing and research publication skills",
      icon: FaFileMedical,
      path: "/academics/research-paper-writing",
      gradient: "from-purple-500 to-violet-500",
      hoverGradient: "from-purple-600 to-violet-600",
      subjects: ["Academic Writing", "Citations", "Methodology"],
    },
    {
      title: "Anatomy",
      description: "Explore human anatomy and physiological systems in detail",
      icon: FaBone,
      path: "/academics/anatomy",
      gradient: "from-rose-500 to-pink-500",
      hoverGradient: "from-rose-600 to-pink-600",
      subjects: ["Human Body", "Physiology", "Medical Terms"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-customGray via-darkGray to-customGray overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 bg-opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-customGray to-darkGray rounded-2xl mb-8 shadow-2xl">
            <FaGraduationCap className="text-white text-3xl" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excel in
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mt-2">
              Academic Excellence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advance your academic knowledge with specialized courses in medical
            sciences, research methodology, and scholarly writing. Build
            expertise that matters.
          </p>

          <div className="flex items-center justify-center gap-3 text-yellow-400 mb-12">
            <FaStar className="text-xl" />
            <span className="text-lg font-medium text-white">
              Discover Your Academic Path
            </span>
            <FaStar className="text-xl" />
          </div>
        </div>

        {/* Academic Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {academicPaths.map((path, index) => {
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
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                          <IconComponent className="text-white text-2xl" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {path.title}
                          </h3>
                          <div className="flex items-center gap-2 text-white text-opacity-80">
                            <FaBookOpen className="text-sm" />
                            <span className="text-sm font-medium">
                              Start Learning
                            </span>
                          </div>
                        </div>
                      </div>
                      <FaArrowRight className="text-white text-opacity-60 group-hover:text-opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                      {path.description}
                    </p>

                    {/* Subject areas */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {path.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:text-yellow-200 transition-colors duration-300">
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
              Ready to Advance Your Academic Career?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join thousands of students and professionals who have enhanced
              their academic credentials with our specialized courses.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">25K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">150+</div>
                <div className="text-sm text-gray-400">Academic Courses</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-sm text-gray-400">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicsHero;
