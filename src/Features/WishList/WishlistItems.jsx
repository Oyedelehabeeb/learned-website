import { NavLink } from "react-router-dom";
import { useDeleteWishlist } from "./useDeleteWishlist";

/* eslint-disable react/prop-types */
function WishlistItems({ course }) {
  const { id, imageUrl, courseId, title, instructor, price } = course;
  const { deleteWishlist, isDeleting } = useDeleteWishlist();

  return (
    <div className="border rounded-md shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <NavLink to={`/courses/${courseId}`}>
        <img src={imageUrl} alt="Course" className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
            {title}
          </h3>
          <p className="text-gray-600">{instructor}</p>
          <p className="text-yellow-500 text-lg font-semibold">${price}</p>
        </div>
      </NavLink>

      {/* Remove from Wishlist Button */}
      <div className="p-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-full"
          onClick={() => deleteWishlist(id)}
        >
          {isDeleting ? "Removing from Wishlis" : "Remove from Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default WishlistItems;
