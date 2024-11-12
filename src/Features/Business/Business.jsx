import { NavLink } from "react-router-dom";

function Business() {
  return (
    <nav className="bg-blue-400 py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-white">
          <NavLink
            to="/business/entrepreneur"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Entrepreneur
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/business/sales"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Sales
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink
            to="/business/management"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                : "hover:text-yellow-400 transition duration-300"
            }
          >
            Management
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Business;
