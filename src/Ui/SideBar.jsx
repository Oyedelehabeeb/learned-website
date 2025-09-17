import { Link, NavLink } from "react-router-dom";
import { SiCssdesignawards, SiGooglemarketingplatform } from "react-icons/si";
import {
  MdOutlineDeveloperMode,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { FaBookOpen, FaHome, FaUserCircle } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useUser } from "../Features/Authentication/useUser";

function SideBar() {
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const fullName = user?.user_metadata?.full_name;
  const avatar = user?.user_metadata?.avatar;

  const navigationItems = [
    {
      to: "/home",
      icon: FaHome,
      label: "Home",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/academics/academics-hero",
      icon: FaBookOpen,
      label: "Teaching & Academics",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/development/development-hero",
      icon: MdOutlineDeveloperMode,
      label: "Development",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/design/design-hero",
      icon: SiCssdesignawards,
      label: "Design",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/marketing/marketing-hero",
      icon: SiGooglemarketingplatform,
      label: "Marketing",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/finance/finance-hero",
      icon: MdOutlineAccountBalanceWallet,
      label: "Accounting & Finance",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/business/business-hero",
      icon: MdOutlineBusinessCenter,
      label: "Business",
      gradient: "from-darkGray to-customGray",
    },
    {
      to: "/fitness/fitness-hero",
      icon: IoMdFitness,
      label: "Health & Fitness",
      gradient: "from-darkGray to-customGray",
    },
  ];

  return (
    <div className="h-full bg-customGray bg-opacity-95 backdrop-blur-lg border-r border-gray-600 shadow-lg flex flex-col">
      <nav
        className="flex flex-col p-6 space-y-2 flex-1 overflow-y-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        {/* User Profile Section */}
        <Link
          to="/settings"
          className="flex items-center gap-4 p-4 mb-6 bg-darkGray rounded-2xl hover:from-yellow-400 hover:to-orange-400 hover:bg-opacity-30 transition-all duration-300 group"
        >
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border-3 border-gradient-to-r from-yellow-400 to-orange-400 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img
                src={avatar ? avatar : "default-user.jpg"}
                alt={fullname || "User"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="hidden md:block">
            <p className="text-lg font-bold text-beige group-hover:text-beige transition-colors duration-300">
              {fullname || fullName || "User"}
            </p>
            <p className="text-sm text-gray-400">View Profile</p>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="space-y-2">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl font-medium transition-all duration-300 group ${
                    isActive
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105`
                      : "text-beige hover:bg-gray-700 hover:bg-opacity-50 hover:scale-105"
                  }`
                }
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300`}
                >
                  <IconComponent className="text-xl" />
                </div>
                <span className="hidden md:block text-sm font-semibold">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="hidden md:block pt-6">
          <div className="bg-gradient-to-r from-yellow-500 bg-opacity-20 to-orange-500 bg-opacity-20 rounded-2xl p-4 text-center">
            <FaUserCircle className="text-3xl text-yellow-400 mx-auto mb-2" />
            <p className="text-xs text-white font-medium">Learning Platform</p>
            <p className="text-xs text-gray-50">Expand your knowledge</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
