/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiTrash2, FiStar } from "react-icons/fi";
import { useDeleteCartItem } from "./useDeleteCartItem";
import { formatCurrency } from "../../Utils/helper";
export default function CartItems({ item }) {
  const { deleteCartItem, isDeleting } = useDeleteCartItem();
  return <article className="collection-row"><Link to={`/courses/${item.id}`}><img src={item.imageUrl} alt="" loading="lazy" /></Link><div className="collection-info"><span className="eyebrow">YOUR NEXT SKILL</span><Link to={`/courses/${item.id}`}><h3>{item.title}</h3></Link><p>{item.instructor}</p><span className="course-rating"><FiStar />{item.rating}</span></div><div className="collection-actions"><strong>{formatCurrency(item.price)}</strong><button className="remove-button" aria-label={`Remove ${item.title} from cart`} disabled={isDeleting} onClick={() => deleteCartItem(item.id)}><FiTrash2 />{isDeleting ? "Removing…" : "Remove"}</button></div></article>;
}
