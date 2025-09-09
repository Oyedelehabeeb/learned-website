import { NavLink } from "react-router-dom";
import {
  FaTrash,
  FaStar,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaEye,
} from "react-icons/fa";
import { useDeleteWishlist } from "./useDeleteWishlist";

/* eslint-disable react/prop-types */
function WishlistItems({ course, index }) {
  const { id, imageUrl, courseId, title, instructor, price } = course;
  const { deleteWishlist, isDeleting } = useDeleteWishlist();

  // Use courseId if available, otherwise fallback to id
  const linkCourseId = courseId || id;

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Wishlist Number Badge */}
      <div className="absolute top-4 left-4 z-10 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
        {index + 1}
      </div>

      {/* Love Badge */}
      <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <FaHeart className="text-pink-500 text-lg" />
      </div>

      {/* Course Image */}
      <div className="relative overflow-hidden h-48">
        <NavLink to={`/courses/${linkCourseId}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3">
              <FaEye className="text-customGray text-xl" />
            </div>
          </div>
        </NavLink>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <NavLink to={`/courses/${linkCourseId}`} className="block">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-customGray transition-colors duration-300">
              {title}
            </h3>

            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <FaUser className="text-sm text-customGray" />
              <span className="text-sm truncate">{instructor}</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-gray-300 text-sm" />
              </div>
              <span className="text-sm text-gray-500">(4.2)</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold text-customGray">
                ${price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${(price * 1.4).toFixed(2)}
              </span>
            </div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full whitespace-nowrap">
              30% OFF
            </span>
          </div>
        </NavLink>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <NavLink
            to={`/courses/${linkCourseId}`}
            className="flex-1 bg-gradient-to-r from-customGray to-darkGray text-white py-2 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <FaShoppingCart className="text-sm" />
            View Course
          </NavLink>

          <button
            className={`group/btn bg-red-50 text-red-600 border border-red-200 py-2 px-3 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 ${
              isDeleting ? "cursor-not-allowed opacity-50" : "hover:shadow-lg"
            }`}
            onClick={() => deleteWishlist(id)}
            disabled={isDeleting}
            title="Remove from wishlist"
          >
            <FaTrash
              className={`text-sm transition-transform duration-300 ${
                isDeleting ? "animate-spin" : "group-hover/btn:scale-110"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-pink-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}

export default WishlistItems;
