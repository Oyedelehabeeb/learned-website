import { FaShoppingCart } from "react-icons/fa"; // Changed icon to cart
import { Link } from "react-router-dom";
import Loader from "./../../Ui/Loader";
import CartItems from "./CartItems";
import { useCart } from "./useCart";

function Cart() {
  const { cart, isLoading: cartLoading } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  if (cartLoading) return <Loader />;

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center p-24 h-screen">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link to="/courses" className="mt-4 text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-3xl font-bold text-center flex items-center justify-center space-x-4">
        <FaShoppingCart className="text-4xl" />{" "}
        {/* Cart icon with proper size */}
        <span>Cart</span>
      </div>
      <div className="max-w-4xl mx-auto pb-6">
        {cart.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
        <div className="mt-8 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-bold">Total: ₦{totalPrice.toFixed(2)}</h2>
          <button
            disabled={cart.length === 0}
            className={`mt-4 w-full px-4 py-3 rounded-md ${
              cart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } text-white`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
