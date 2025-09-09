/* eslint-disable react/prop-types */
import { FaTrash, FaStar, FaUser, FaClock } from "react-icons/fa";
import { useDeleteCartItem } from "./useDeleteCartItem";
import { formatCurrency } from "./../../Utils/helper";

function CartItems({ item, index }) {
  const { deleteCartItem, isDeleting } = useDeleteCartItem();
  const { imageUrl, title, price, instructor, id, rating } = item;

  const handleDelete = () => {
    deleteCartItem(id);
  };

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
      {/* Course Number Badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-customGray to-darkGray text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
        {index + 1}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Course Image */}
        <div className="relative overflow-hidden rounded-xl flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full md:w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
        </div>

        {/* Course Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-customGray transition-colors duration-300">
                {title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUser className="text-sm text-customGray" />
                  <span className="text-sm">
                    <span className="font-medium">Instructor:</span>{" "}
                    {instructor}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <FaStar className="text-sm text-yellow-400" />
                  <span className="text-sm">
                    <span className="font-medium">Rating:</span> {rating} ⭐
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-sm text-customGray" />
                  <span className="text-sm">
                    <span className="font-medium">Lifetime Access</span>
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-customGray">
                  {formatCurrency(price)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(price * 1.5)}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  33% OFF
                </span>
              </div>
            </div>

            {/* Remove Button */}
            <div className="flex-shrink-0">
              <button
                className={`group/btn flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 font-medium ${
                  isDeleting
                    ? "cursor-not-allowed opacity-50"
                    : "hover:shadow-lg"
                }`}
                onClick={handleDelete}
                disabled={isDeleting}
              >
                <FaTrash
                  className={`text-sm transition-transform duration-300 ${
                    isDeleting ? "animate-spin" : "group-hover/btn:scale-110"
                  }`}
                />
                <span className="text-sm">
                  {isDeleting ? "Removing..." : "Remove"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-customGray opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}

export default CartItems;
