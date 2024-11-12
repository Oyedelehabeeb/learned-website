import { NavLink } from "react-router-dom";

function Fitness() {
  return (
    <nav className="bg-gray-800 py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-white">
          <NavLink
            to="/fitness/fitness-health"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Health & Fitness
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/fitness/nutrition"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Nutrition & Diet
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/fitness/mental-health"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Mental Health
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Fitness;
