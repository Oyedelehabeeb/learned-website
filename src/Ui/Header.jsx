/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import Brand from "./Brand";
import { useCart } from "../Features/Cart/useCart";
import { useWishlist } from "../Features/WishList/useWishList";
export default function Header({ onMenu, menuOpen }) {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  return <header className="app-header"><div className="header-brand"><button className="mobile-menu icon-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="app-navigation" onClick={onMenu}>{menuOpen ? <FiX /> : <FiMenu />}</button><Brand to="/home" /></div><span className="header-caption">Your next chapter starts here.</span><nav className="header-actions" aria-label="Quick access"><NavLink to="/mylearning" className="header-learning">My learning</NavLink><NavLink to="/wishlist" className="icon-button" aria-label={`Wishlist, ${wishlist.length} courses`} title="Wishlist"><FiHeart />{wishlist.length > 0 && <span className="count-badge">{wishlist.length}</span>}</NavLink><NavLink to="/cart" className="icon-button" aria-label={`Cart, ${cart.length} courses`} title="Cart"><FiShoppingBag />{cart.length > 0 && <span className="count-badge">{cart.length}</span>}</NavLink></nav></header>;
}
