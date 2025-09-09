import { FaGraduationCap } from "react-icons/fa";

function Loader() {
  return (
    <div className="fixed inset-0 bg-customGray bg-opacity-95 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="text-center">
        {/* Main Logo with Animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto animate-pulse shadow-2xl">
            <FaGraduationCap className="text-white text-4xl animate-bounce" />
          </div>

          {/* Pulsing Ring Animation */}
          <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-4 border-yellow-400 animate-ping opacity-20"></div>
          <div className="absolute inset-2 w-16 h-16 mx-auto rounded-xl border-2 border-yellow-300 animate-ping opacity-30 animation-delay-150"></div>
        </div>

        {/* Brand Name */}
        <h2 className="text-3xl font-bold text-beige mb-4 animate-pulse">
          Learned
        </h2>

        {/* Loading Text */}
        <p className="text-gray-400 text-lg mb-8">
          Preparing your learning experience...
        </p>

        {/* Modern Loading Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full animate-pulse"></div>
        </div>

        {/* Floating Dots Animation */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce animation-delay-200"></div>
        </div>

        {/* Subtle Description */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Loading courses and content...
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 bg-opacity-5 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-600 bg-opacity-5 rounded-full blur-3xl animate-pulse animation-delay-150"></div>
      </div>
    </div>
  );
}

export default Loader;
