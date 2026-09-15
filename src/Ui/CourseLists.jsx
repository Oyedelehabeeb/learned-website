/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiHeart, FiCheck, FiStar, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../Features/Cart/useCart";
import { useWishlist } from "../Features/WishList/useWishList";
import { useUser } from "../Features/Authentication/useUser";
import { formatCurrency } from "../Utils/helper";
export default function CourseLists({ course }) {
  const { user } = useUser();
  const { cart, addItem: addCart, isAdding: cartBusy } = useCart();
  const { wishlist, addItem: addWishlist, isAdding: wishlistBusy } = useWishlist();
  const { courseId, title, imageUrl, price, instructor, rating } = course;
  const saved = wishlist.some(item => String(item.id) === String(courseId));
  const added = cart.some(item => String(item.id) === String(courseId));
  function add(mutate) { if (user?.id) mutate({ id: courseId, title, imageUrl, price, instructor, rating, user_id: user.id }); }
  return <article className="course-card"><Link to={`/courses/${courseId}`} aria-label={`View ${title}`}><img className="course-card-image" src={imageUrl} alt="" loading="lazy" /></Link><div className="course-card-body"><div className="course-card-label">BUILD YOUR NEXT SKILL</div><Link to={`/courses/${courseId}`}><h3>{title}</h3></Link><p className="course-instructor">{instructor}</p><div className="course-meta"><strong>{formatCurrency(price)}</strong><span className="course-rating"><FiStar />{rating}</span></div></div><div className="course-card-actions"><button className={`save-button ${saved ? "saved" : ""}`} title={saved ? "Saved to wishlist" : "Save to wishlist"} aria-label={saved ? `${title} is saved to wishlist` : `Save ${title} to wishlist`} aria-pressed={saved} disabled={saved || wishlistBusy || !user} onClick={() => add(addWishlist)}><FiHeart /></button>{added ? <Link className="btn btn-outline" to="/cart"><FiCheck />In your cart</Link> : <button className="btn btn-primary" disabled={cartBusy || !user} onClick={() => add(addCart)}>{cartBusy ? "Adding…" : <><FiShoppingBag />Add to cart</>}</button>}</div></article>;
}
