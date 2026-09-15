import { NavLink } from "react-router-dom";

function Development() {
  return (
    <nav className="bg-canvas py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-ink">
          <NavLink
            to="/development/web-development"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Web Development
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/development/mobile-development"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Mobile Development
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/development/game-development"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Game Development
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/development/data-science"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
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
