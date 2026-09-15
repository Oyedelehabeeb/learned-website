import { NavLink } from "react-router-dom";

function Marketing() {
  return (
    <nav className="bg-canvas py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-ink">
          <NavLink
            to="/marketing/digital-marketing"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Digital Marketing
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/marketing/social-media-marketing"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Social Media Marketing
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/marketing/branding"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Branding
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Marketing;
