import { NavLink } from "react-router-dom";

function Business() {
  return (
    <nav className="bg-sage py-4 shadow-md">
      <ul className="list-none flex justify-around space-x-10">
        <li className="text-ink">
          <NavLink
            to="/business/entrepreneur"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Entrepreneur
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/business/sales"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
            }
          >
            Sales
          </NavLink>
        </li>
        <li className="text-ink">
          <NavLink
            to="/business/management"
            className={({ isActive }) =>
              isActive
                ? "text-forest font-semibold border-b-2 border-line"
                : "hover:text-forest transition duration-300"
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
