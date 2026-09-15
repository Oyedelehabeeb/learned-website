/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiTrash2, FiStar, FiShoppingBag, FiCheck } from "react-icons/fi";
import { useDeleteWishlist } from "./useDeleteWishlist";
import { useCart } from "../Cart/useCart";
import { useUser } from "../Authentication/useUser";
import { formatCurrency } from "../../Utils/helper";
export default function WishlistItems({ item }) {
  const { deleteWishlist, isDeleting } = useDeleteWishlist();
  const { addItem, isAdding, cart } = useCart();
  const { user } = useUser();
  const added = cart.some(course => String(course.id) === String(item.id));
  return <article className="collection-row"><Link to={`/courses/${item.id}`}><img src={item.imageUrl} alt="" loading="lazy" /></Link><div className="collection-info"><span className="eyebrow">SAVED FOR LATER</span><Link to={`/courses/${item.id}`}><h3>{item.title}</h3></Link><p>{item.instructor}</p><span className="course-rating"><FiStar />{item.rating}</span></div><div className="collection-actions"><strong>{formatCurrency(item.price)}</strong>{added ? <Link className="btn btn-outline" to="/cart"><FiCheck />In your cart</Link> : <button className="btn btn-primary" disabled={isAdding || !user} onClick={() => addItem({ id: item.id, title: item.title, price: item.price, instructor: item.instructor, imageUrl: item.imageUrl, rating: item.rating, user_id: user.id })}>{isAdding ? "Adding…" : <><FiShoppingBag />Add to cart</>}</button>}<button className="remove-button" aria-label={`Remove ${item.title} from wishlist`} disabled={isDeleting} onClick={() => deleteWishlist(item.id)}><FiTrash2 />{isDeleting ? "Removing…" : "Remove"}</button></div></article>;
}
