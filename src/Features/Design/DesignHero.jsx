/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { FaPaintBrush, FaLaptopCode, FaPenNib } from "react-icons/fa";

function DesignHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-8 text-center">
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Explore the World of Design
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Unleash your creativity with our courses in Web Design, Graphics
          Design, and UX Design. Whether you're building websites, designing
          captivating visuals, or improving user experiences, we have something
          for you.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/design/web-design"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaLaptopCode className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Web Design</span>
          </NavLink>

          <NavLink
            to="/design/graphics-design-illustration"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaPaintBrush className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Graphics Design</span>
          </NavLink>

          <NavLink
            to="/design/user-experience-design"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaPenNib className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">UX Design</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DesignHero;
