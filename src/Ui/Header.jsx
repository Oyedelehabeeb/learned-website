import { NavLink } from "react-router-dom";
import { useCart } from "../Features/Cart/useCart";
import { useWishlist } from "./../Features/WishList/useWishList";

function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const numOfCartItems = cart.length;
  const numOfwishListItems = wishlist.length;

  return (
    <header className="flex justify-evenly md:justify-between items-center px-6 py-5  text-beige w-full h-16 fixed top-0 z-10 bg-darkGray shadow-sm">
      <div>
        {" "}
        <NavLink to="/home" className="text-xl font-bold">
          Learned
        </NavLink>
      </div>
      <ul className="list-none flex space-x-8">
        <li>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-300 border-b-2 border-yellow-300"
                : "hover:text-yellow-300"
            }
          >
            Wishlist{" "}
            <span
              className={`${
                numOfwishListItems === 0 ? "hidden" : "md:inline"
              } hidden`}
            >
              ({numOfwishListItems})
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-300 border-b-2 border-yellow-300"
                : "hover:text-yellow-300"
            }
          >
            Cart{" "}
            <span
              className={`${
                numOfCartItems === 0 ? "hidden" : "md:inline"
              } hidden`}
            >
              ({numOfCartItems})
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payment-history"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 hover:text-yellow-300 border-b-2 border-yellow-300"
                : "hover:text-yellow-300"
            }
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? " text-yellow-300 hover:text-yellow-300 border-b-2 border-yellow-300"
                : "hover:text-yellow-300"
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
