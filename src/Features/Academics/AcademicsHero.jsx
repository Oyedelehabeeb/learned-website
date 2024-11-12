import { NavLink } from "react-router-dom";
import { FaFlask, FaStethoscope, FaFileMedical, FaBone } from "react-icons/fa";

function AcademicsHero() {
  return (
    <div className="relative bg-gradient-to-r from-customGray to-darkGray text-white py-16 px-8 text-center">
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Explore Academic Excellence
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Dive into Chemistry, Medical Coding, Anatomy, and Research Paper
          Writing. Advance your academic knowledge.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8">
          <NavLink
            to="/academics/clinical-research"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaFlask className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Clinical Research</span>
          </NavLink>

          <NavLink
            to="/academics/medical-coding"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaStethoscope className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Medical Coding</span>
          </NavLink>

          <NavLink
            to="/academics/research-paper-writing"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaFileMedical className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Research Paper Writing</span>
          </NavLink>

          <NavLink
            to="/academics/anatomy"
            className="group bg-yellow-400 text-gray-800 px-6 py-4 rounded-lg flex items-center space-x-3 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaBone className="text-2xl group-hover:animate-bounce" />
            <span className="font-semibold">Anatomy</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AcademicsHero;
