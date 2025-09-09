import {
  FaShoppingCart,
  FaShoppingBag,
  FaCreditCard,
  FaLock,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa"; // Cart icon
import { Link, useNavigate } from "react-router-dom";
import Loader from "./../../Ui/Loader";
import CartItems from "./CartItems";
import { useCart } from "./useCart";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { useUser } from "./../Authentication/useUser";
import supabase from "../../Services/supabase";
import { clearCart } from "../../Services/apiCourses";
import toast from "react-hot-toast";

function Cart() {
  const { cart, isLoading: cartLoading } = useCart();
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const email = user?.email;
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  // Flutterwave payment configuration
  const config = {
    public_key: "FLWPUBK_TEST-d98c87a253b71124bf20103535a0e297-X",
    tx_ref: `tx_ref_${Date.now()}`,
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: email || "default@example.com",
      name: fullname || "Guest User",
    },
    customizations: {
      title: "The Learned Website",
      description: "Payment for items in cart",
      // logo: "https://your-logo-url.com/logo.png", // Optional logo URL
    },
  };

  // Function to handle the payment response and save it to Supabase
  async function handlePaymentResponse(response) {
    try {
      if (response.status === "successful") {
        const { data, error } = await supabase.from("payments").insert([
          {
            tx_ref: response.tx_ref,
            price: response.amount,
            currency: response.currency,
            status: response.status,
            customer_email: response.customer.email,
          },
        ]);

        if (error) throw error;
        toast.success("Payment successful! Thank you for your purchase.");
        console.log("Payment stored successfully:", data);

        // Clear the cart after successful payment
        if (user?.id) {
          await clearCart(user.id);
        } else {
          console.error("User ID is undefined");
        }
      } else {
        toast.error("Payment failed. Please try again.");
        console.error("Payment was not successful:", response);
      }
      navigate("/payment-history");
    } catch (error) {
      console.error("Error storing payment:", error);
    }
  }

  // Initialize Flutterwave payment
  const handleFlutterPayment = useFlutterwave(config);

  if (cartLoading) return <Loader />;

  if (!cart.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
        <div className="text-center max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-customGray to-darkGray rounded-full flex items-center justify-center shadow-2xl">
            <FaShoppingBag className="text-white text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Looks like you haven't added any courses to your cart yet. Discover
            amazing courses and start your learning journey!
          </p>
          <Link
            to="/home"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-customGray to-darkGray text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaShoppingCart className="text-lg" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-customGray to-darkGray rounded-2xl mb-6 shadow-xl">
            <FaShoppingCart className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {cart.length} {cart.length === 1 ? "course" : "courses"} in your
            cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaShoppingBag className="text-customGray" />
                Course Items
              </h2>
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <CartItems key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaCreditCard className="text-customGray" />
                Order Summary
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">
                    Subtotal ({cart.length} items)
                  </span>
                  <span className="font-semibold">
                    ₦{totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-semibold text-green-600">-₦0.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 border-gray-200">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-customGray">
                    ₦{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 text-green-700">
                  <FaLock className="text-lg" />
                  <div>
                    <p className="font-semibold">Secure Payment</p>
                    <p className="text-sm text-green-600">
                      Your payment information is protected
                    </p>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                disabled={cart.length === 0}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                  cart.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-xl hover:-translate-y-1"
                } flex items-center justify-center gap-3`}
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      handlePaymentResponse(response);
                      closePaymentModal();
                    },
                    onClose: () => {
                      console.log("Payment modal closed");
                    },
                  });
                }}
              >
                <FaCheckCircle className="text-xl" />
                Proceed to Checkout
              </button>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <FaStar className="text-yellow-400" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
