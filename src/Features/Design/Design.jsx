import { NavLink } from "react-router-dom";

function Design() {
  return (
    <nav className="bg-canvas py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-ink">
          <NavLink
            to="/design/web-design"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Web Design
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/design/graphics-design-illustration"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Graphics Design & Illustration
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/design/user-experience-design"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            User Experience Design
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Design;
