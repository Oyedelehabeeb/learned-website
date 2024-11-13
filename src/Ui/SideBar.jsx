import { Link, NavLink } from "react-router-dom";
import { SiCssdesignawards, SiGooglemarketingplatform } from "react-icons/si";
import {
  MdOutlineDeveloperMode,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useLogout } from "../Features/Authentication/useLogout";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useUser } from "../Features/Authentication/useUser";

function SideBar() {
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const fullName = user?.user_metadata?.full_name;
  const avatar = user?.user_metadata?.avatar;

  const { logout } = useLogout();

  return (
    <div className="h-full bg-darkGray text-beige">
      <nav className="flex flex-col items-start p-4 space-y-4">
        <Link to="/settings" className="flex gap-x-4 items-center mb-4">
          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-yellow-400 overflow-hidden">
            <img
              src={avatar ? avatar : "default-user.jpg"}
              alt={fullname || "User"}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-2 text-lg font-semibold hidden md:block">
            {fullname ? fullname : fullName}
          </span>
        </Link>

        <NavLink
          to="/academics/academics-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <FaBookOpen className="text-xl" />
          <span className="hidden md:block">Teaching & Academics</span>
        </NavLink>

        <NavLink
          to="/development/development-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <MdOutlineDeveloperMode className="text-xl" />
          <span className="hidden md:block">Development</span>
        </NavLink>

        <NavLink
          to="/design/design-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <SiCssdesignawards className="text-xl" />
          <span className="hidden md:block">Design</span>
        </NavLink>

        <NavLink
          to="/marketing/marketing-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <SiGooglemarketingplatform className="text-xl" />
          <span className="hidden md:block">Marketing</span>
        </NavLink>

        <NavLink
          to="/finance/finance-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <MdOutlineAccountBalanceWallet className="text-xl" />
          <span className="hidden md:block">Accounting & Finance</span>
        </NavLink>

        <NavLink
          to="/business/business-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <MdOutlineBusinessCenter className="text-xl" />
          <span className="hidden md:block">Business</span>
        </NavLink>

        <NavLink
          to="/fitness/fitness-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <IoMdFitness className="text-xl" />
          <span className="hidden md:block">Health & Fitness</span>
        </NavLink>

        <button
          className="bg-red-700 text-white flex items-center gap-2 p-2 rounded-lg w-full hover:bg-red-900 transition duration-300"
          onClick={logout}
        >
          <CiLogout className="text-xl" />
          <span className="hidden md:block">Logout</span>
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
