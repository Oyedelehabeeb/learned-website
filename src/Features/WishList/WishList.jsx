import {
  FaRegHeart,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaBookmark,
} from "react-icons/fa";
import { useWishlist } from "./useWishList";
import WishlistItems from "./WishlistItems";
import Loader from "./../../Ui/Loader";
import { Link } from "react-router-dom";

function WishList() {
  const { wishlist, isLoading } = useWishlist();

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {wishlist?.length === 0 ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md mx-auto">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-2xl">
                <FaRegHeart className="text-white text-4xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your Wishlist is Empty
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Start building your dream course collection! Add courses you
                love to your wishlist and keep track of what you want to learn
                next.
              </p>
              <Link
                to="/home"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaShoppingCart className="text-lg" />
                Discover Courses
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6 shadow-xl">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My Wishlist
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {wishlist.length} {wishlist.length === 1 ? "course" : "courses"}{" "}
                saved for later
              </p>

              {/* Stats Bar */}
              <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-lg">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaBookmark className="text-pink-500" />
                  <span className="font-medium">{wishlist.length} Saved</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">Curated for You</span>
                </div>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlist?.map((course, index) => (
                <WishlistItems
                  key={course.id || index}
                  course={course}
                  index={index}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Start Learning?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Turn your wishlist into achievements. Start with any course
                  and begin your learning journey today!
                </p>
                <Link
                  to="/home"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-customGray to-darkGray text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <FaShoppingCart className="text-lg" />
                  Explore More Courses
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WishList;
