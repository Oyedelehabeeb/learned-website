import { FaShoppingCart } from "react-icons/fa"; // Cart icon
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
      <div className="flex flex-col items-center p-24 h-screen">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link to="/home" className="mt-4 text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-3xl font-bold text-center flex items-center justify-center space-x-4">
        <FaShoppingCart className="text-4xl" />
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
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
