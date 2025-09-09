import { NavLink } from "react-router-dom";
import { useCart } from "../Features/Cart/useCart";
import { useWishlist } from "./../Features/WishList/useWishList";
import { useLogout } from "../Features/Authentication/useLogout";
import {
  FaShoppingCart,
  FaHeart,
  FaHistory,
  FaCog,
  FaGraduationCap,
  FaSignOutAlt,
} from "react-icons/fa";

function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { logout } = useLogout();

  const numOfCartItems = cart.length;
  const numOfwishListItems = wishlist.length;

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout? You will need to sign in again to access your account."
    );

    if (confirmed) {
      logout();
    }
  };

  return (
    <header className="bg-customGray bg-opacity-95 backdrop-blur-lg border-b border-gray-600 shadow-lg w-full h-20 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-darkGray via-customGray to-darkGray rounded-xl flex items-center justify-center">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <NavLink
              to="/home"
              className="text-2xl font-bold text-beige hover:scale-105 transition-transform duration-300"
            >
              Learned
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                    : "text-beige hover:bg-pink-500 hover:bg-opacity-20 hover:text-pink-300"
                }`
              }
            >
              <FaHeart className="text-lg" />
              <span className="hidden md:block">Wishlist</span>
              {numOfwishListItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {numOfwishListItems}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                    : "text-beige hover:bg-green-500 hover:bg-opacity-20 hover:text-green-300"
                }`
              }
            >
              <FaShoppingCart className="text-lg" />
              <span className="hidden md:block">Cart</span>
              {numOfCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {numOfCartItems}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                    : "text-beige hover:bg-blue-500 hover:bg-opacity-20 hover:text-blue-300"
                }`
              }
            >
              <FaHistory className="text-lg" />
              <span className="hidden md:block">History</span>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                    : "text-beige hover:bg-gray-500 hover:bg-opacity-20 hover:text-gray-300"
                }`
              }
            >
              <FaCog className="text-lg" />
              <span className="hidden md:block">Settings</span>
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 text-beige hover:bg-red-500 hover:bg-opacity-20 hover:text-red-300"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="hidden md:block">Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
