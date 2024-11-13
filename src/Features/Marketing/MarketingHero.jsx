import { NavLink } from "react-router-dom";
import { FaBullhorn, FaHashtag, FaTag } from "react-icons/fa";

function MarketingHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-8 text-center">
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Master the Art of Marketing
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Learn the latest strategies in Digital Marketing, Social Media
          Marketing, and Branding. Reach your audience like never before.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/marketing/digital-marketing"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaBullhorn className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Digital Marketing</span>
          </NavLink>

          <NavLink
            to="/marketing/social-media-marketing"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaHashtag className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Social Media Marketing</span>
          </NavLink>

          <NavLink
            to="/marketing/branding"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaTag className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Branding</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MarketingHero;
