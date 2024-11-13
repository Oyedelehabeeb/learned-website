import { NavLink } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaGamepad,
  FaDatabase,
} from "react-icons/fa";

function DevelopmentHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-4 text-center">
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Become a Master in Development
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Dive deep into Web Development, Mobile Development, Game Development,
          and Data Science. Our courses will help you build the future!
        </p>

        {/* Responsive Buttons */}
        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/development/web-development"
            className="group bg-yellow-400 text-gray-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex items-center space-x-2 sm:space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaLaptopCode className="text-xl sm:text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Web Development</span>
          </NavLink>

          <NavLink
            to="/development/mobile-development"
            className="group bg-yellow-400 text-gray-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex items-center space-x-2 sm:space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaMobileAlt className="text-xl sm:text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Mobile Development</span>
          </NavLink>

          <NavLink
            to="/development/game-development"
            className="group bg-yellow-400 text-gray-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex items-center space-x-2 sm:space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaGamepad className="text-xl sm:text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Game Development</span>
          </NavLink>

          <NavLink
            to="/development/data-science"
            className="group bg-yellow-400 text-gray-800 px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex items-center space-x-2 sm:space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaDatabase className="text-xl sm:text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Data Science</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentHero;
