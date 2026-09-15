import { NavLink } from "react-router-dom";

function Fitness() {
  return (
    <nav className="bg-canvas py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-ink">
          <NavLink
            to="/fitness/fitness-health"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Health & Fitness
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/fitness/nutrition"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Nutrition & Diet
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/fitness/mental-health"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
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
