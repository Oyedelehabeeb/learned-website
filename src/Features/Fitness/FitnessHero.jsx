import { NavLink } from "react-router-dom";
import { FaDumbbell, FaAppleAlt, FaBrain } from "react-icons/fa";

function FitnessHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-8 text-center">
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Achieve Your Fitness Goals
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Explore courses in Fitness, Nutrition, and Mental Health. Your journey
          to a healthier life starts here.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/fitness/fitness-health"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaDumbbell className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Fitness</span>
          </NavLink>

          <NavLink
            to="/fitness/nutrition"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaAppleAlt className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Nutrition</span>
          </NavLink>

          <NavLink
            to="/fitness/mental-health"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaBrain className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Mental Health</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FitnessHero;
