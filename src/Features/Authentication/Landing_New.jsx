import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaAward,
  FaClock,
  FaInfinity,
  FaRocket,
  FaHeart,
  FaGlobe,
  FaChartLine,
  FaBook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  const features = [
    {
      icon: FaAward,
      title: "Premium Quality Courses",
      description:
        "Learn from industry experts with carefully crafted curriculum designed for real-world success.",
      color: "bg-yellow-600",
    },
    {
      icon: FaClock,
      title: "Learn at Your Pace",
      description:
        "Flexible scheduling that fits your lifestyle. Study when and where it works best for you.",
      color: "bg-blue-600",
    },
    {
      icon: FaInfinity,
      title: "Lifetime Access",
      description:
        "Once enrolled, access your courses forever. Return anytime to refresh your knowledge.",
      color: "bg-purple-600",
    },
  ];

  const testimonials = [
    {
      quote:
        "The best investment I made for my career! The courses are incredibly detailed and the instructors are world-class. I landed a senior developer role within 3 months.",
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Tech Corp",
      rating: 5,
    },
    {
      quote:
        "Flexible learning at its finest. I completed my data science certification while working full-time. The platform made it so easy to track my progress.",
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Analytics Inc",
      rating: 5,
    },
  ];

  const stats = [
    { icon: FaUsers, number: "50K+", label: "Active Learners" },
    { icon: FaBook, number: "2,000+", label: "Expert Courses" },
    { icon: FaGlobe, number: "120+", label: "Countries" },
    { icon: FaChartLine, number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-customGray text-beige overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold text-beige">Learned</span>
            </div>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-6 py-2 text-beige hover:text-yellow-400 font-medium transition-colors duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-yellow-600 text-white rounded-xl font-medium hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white border-opacity-20">
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-sm font-medium text-beige">
                Trusted by 50,000+ professionals worldwide
              </span>
              <FaStar className="text-yellow-400 text-sm" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Transform Your
            <span className="block text-yellow-400 mt-2">Career Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Master in-demand skills with premium courses taught by industry
            experts. Join thousands of learners advancing their careers through
            our world-class platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/signup"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-yellow-600 text-white rounded-2xl text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Start Learning Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white bg-opacity-10 backdrop-blur-sm text-beige rounded-2xl text-lg font-medium hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30"
            >
              <FaGraduationCap />
              Browse Courses
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-10 rounded-xl mb-3">
                  <stat.icon className="text-yellow-400 text-xl" />
                </div>
                <div className="text-2xl font-bold text-beige">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-beige mb-6"
            >
              Why Choose
              <span className="block text-yellow-400">Learned?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Experience the difference with our premium learning platform
              designed for your success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-beige mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 bg-white bg-opacity-5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-beige mb-6"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Hear from professionals who transformed their careers with Learned
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-200 text-lg italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-beige">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-yellow-600 rounded-3xl p-16 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white bg-opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <FaHeart className="text-white text-6xl mx-auto mb-6" />
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Ready to Begin?
                </h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-8">
                  Join thousands of learners who are already building their
                  dream careers. Your transformation starts with a single step.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-6 justify-center"
              >
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-yellow-600 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
                >
                  Start Your Journey
                  <FaRocket />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-2xl text-lg font-medium hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
                >
                  <FaGraduationCap />
                  Explore Courses
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg border-t border-white border-opacity-20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold text-beige">Learned</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2025 Learned. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-500">
                Empowering minds, transforming futures.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
