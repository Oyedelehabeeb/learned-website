import { NavLink } from "react-router-dom";

function Design() {
  return (
    <nav className="bg-gray-800 py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-white">
          <NavLink
            to="/design/web-design"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Web Design
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/design/graphics-design-illustration"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Graphics Design & Illustration
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/design/user-experience-design"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
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
