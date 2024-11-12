/* eslint-disable react/prop-types */
import { useDeleteCartItem } from "./useDeleteCartItem";
import { formatCurrency } from "./../../Utils/helper";
function CartItems({ item }) {
  const { deleteCartItem, isDeleting } = useDeleteCartItem();
  const { imageUrl, title, price, instructor, id, rating } = item;

  const handleDelete = () => {
    deleteCartItem(id);
  };

  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:p-4 border border-solid border-darkGray/5 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">Price: {formatCurrency(price)}</p>
            <p className="text-gray-500">Instructor: {instructor}</p>
            <p className="text-gray-500">Rating: {rating}</p>
          </div>
        </div>

        <button
          className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition ${
            isDeleting ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Removing..." : "Remove"}
        </button>
      </div>
    </div>
  );
}

export default CartItems;
