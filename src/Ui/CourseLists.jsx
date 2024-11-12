// src/Components/CourseLists.js
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../Features/Cart/useCart";
import { useWishlist } from "../Features/WishList/useWishList";
import { formatCurrency } from "../Utils/helper";
import { useSession } from "../Services/useSession";

/* eslint-disable react/prop-types */
function CourseLists({ course }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const { data: session, isLoading, isError } = useSession();
  const { courseId, title, imageUrl, price, instructor, rating } = course;

  const { addItem: addCartItem, isAdding: isAddingCart, cart } = useCart();
  const {
    addItem: addWishlistItem,
    isAdding: isAddingWishlist,
    wishlist,
  } = useWishlist();

  useEffect(() => {
    const inCart = cart?.some((item) => item && item.id === courseId);
    const inWishlist = wishlist?.some((item) => item && item.id === courseId);

    setIsAddedToCart(inCart);
    setIsAddedToWishlist(inWishlist);
  }, [cart, wishlist, courseId]);

  function handleAddCartItem() {
    if (!session) {
      console.error("User not authenticated");
      return;
    }

    const userId = session.user.id;
    const newItem = {
      id: courseId,
      title,
      imageUrl,
      price,
      instructor,
      rating,
      user_id: userId,
    };
    addCartItem(newItem);
  }

  function handleAddWishlistItem() {
    if (!session) {
      console.error("User not authenticated");
      return;
    }

    const userId = session.user.id;
    const newItem = {
      id: courseId,
      title,
      imageUrl,
      price,
      instructor,
      rating,
      user_id: userId,
    };
    addWishlistItem(newItem);
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load session.</p>;

  return (
    <div className="border rounded-md shadow-lg hover:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <NavLink to={`/courses/${courseId}`}>
        <img src={imageUrl} alt="Course" className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
            {title}
          </h3>
          <p className="text-gray-600 truncate">{instructor}</p>
          <p className="text-yellow-500 text-lg font-semibold">
            {formatCurrency(price)}
          </p>
          <p className="text-gray-600 font-bold">
            Rating: {rating} <span className="text-yellow-500">⭐</span>
          </p>
        </div>
      </NavLink>

      <div className="p-4 flex justify-between items-center">
        {!isAddedToWishlist && (
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
            onClick={handleAddWishlistItem}
            disabled={isAddingWishlist}
          >
            Add to Wishlist
          </button>
        )}

        {!isAddedToCart && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            onClick={handleAddCartItem}
            disabled={isAddingCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseLists;
