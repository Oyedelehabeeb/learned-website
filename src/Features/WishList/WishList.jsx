import { FaRegHeart } from "react-icons/fa";
import { useWishlist } from "./useWishList";
import WishlistItems from "./WishlistItems";
import Loader from "./../../Ui/Loader";
import { Link } from "react-router-dom";

function WishList() {
  const { wishlist, isLoading } = useWishlist();

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto">
      {wishlist?.length === 0 ? (
        <div className="flex flex-col items-center p-24  h-screen">
          <h2 className="text-2xl font-semibold">Your wishlist is empty.</h2>
          <Link to="/" className="mt-4 text-blue-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="text-3xl font-bold text-center flex items-center justify-center space-x-8">
            <span>
              <FaRegHeart />
            </span>{" "}
            <span>Wishlist</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
            {wishlist?.map((course, index) => (
              <WishlistItems key={index} course={course} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WishList;
