import { NavLink } from "react-router-dom";
import { FaBriefcase, FaChartLine, FaUserTie } from "react-icons/fa";

function BusinessHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-8 text-center">
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Build Your Business Empire
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Become a successful Entrepreneur, Sales professional, or Business
          Manager. Our courses will guide you every step of the way.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/business/entrepreneur"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaBriefcase className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Entrepreneur</span>
          </NavLink>

          <NavLink
            to="/business/sales"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaChartLine className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Sales</span>
          </NavLink>

          <NavLink
            to="/business/management"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaUserTie className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Management</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BusinessHero;
