import { NavLink } from "react-router-dom";

function Development() {
  return (
    <nav className="bg-gray-800 py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-white">
          <NavLink
            to="/development/web-development"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Web Development
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/development/mobile-development"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Mobile Development
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/development/game-development"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Game Development
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/development/data-science"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Data Science
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Development;
