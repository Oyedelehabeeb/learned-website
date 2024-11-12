import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-darkGray min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Learn. Grow. Succeed.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Enroll in high-quality courses and transform your career with new
          skills—anytime, anywhere.
        </motion.p>
        <Link
          to="/login"
          className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started <FaArrowRight className="ml-2" />
        </Link>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Learned?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {["Top-Quality Courses", "Flexible Learning", "Lifetime Access"].map(
            (feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="flex items-center space-x-4"
              >
                <FaCheckCircle className="text-blue-400 text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold">{feature}</h3>
                  <p className="text-gray-400">
                    {`Enjoy ${feature.toLowerCase()} to advance your career.`}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-16 bg-darkGray">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "“The best platform to upskill! I landed my dream job after completing a coding course.”",
            "“Flexible learning at its best. I can study at my pace, and the instructors are top-notch.”",
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <p className="text-lg italic">{testimonial}</p>
              <span className="block mt-2 text-sm text-gray-400">
                - Happy Learner
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 bg-blue-600 text-center">
        <h2 className="text-4xl font-bold">Start Learning Today</h2>
        <p className="mt-4 text-lg text-gray-100">
          Sign up now and unlock thousands of courses at your fingertips.
        </p>
        <Link
          to="/login"
          className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
        >
          Join Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Learned. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
