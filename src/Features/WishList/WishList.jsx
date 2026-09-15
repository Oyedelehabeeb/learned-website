import { FiHeart } from "react-icons/fi";
import { useWishlist } from "./useWishList";
import WishlistItems from "./WishlistItems";
import Loader from "../../Ui/Loader";
import EmptyState from "../../Ui/EmptyState";
export default function WishList() {
  const { wishlist, isWishlistLoading } = useWishlist();
  return <div><header className="page-heading"><span className="eyebrow">SAVE A LITTLE INSPIRATION</span><h1>Your wishlist</h1><p>Good ideas for later. Keep the courses you’re curious about close.</p></header>{isWishlistLoading ? <Loader /> : wishlist.length ? <><div className="section-heading"><h2>Worth coming back to</h2><span>{wishlist.length} saved courses</span></div><div className="collection-list">{wishlist.map(item => <WishlistItems key={item.id} item={item} />)}</div></> : <EmptyState icon={FiHeart} title="A little room for possibility." description="Save a course that catches your eye. You’ll find all your favorites here when you’re ready." />}</div>;
}
