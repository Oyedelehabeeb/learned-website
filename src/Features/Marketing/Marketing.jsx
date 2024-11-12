import { NavLink } from "react-router-dom";

function Marketing() {
  return (
    <nav className="bg-gray-800 py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-white">
          <NavLink
            to="/marketing/digital-marketing"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Digital Marketing
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/marketing/social-media-marketing"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Social Media Marketing
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/marketing/branding"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
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
