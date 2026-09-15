import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag, FiArrowRight, FiLock } from "react-icons/fi";
import { useCart } from "./useCart";
import { useUser } from "../Authentication/useUser";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import supabase from "../../Services/supabase";
import { clearCart } from "../../Services/apiCourses";
import { formatCurrency } from "../../Utils/helper";
import toast from "react-hot-toast";
import CartItems from "./CartItems";
import Loader from "../../Ui/Loader";
import EmptyState from "../../Ui/EmptyState";
function Cart() {
  const { cart, isCartLoading: cartLoading } = useCart();
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

  return <div><header className="page-heading"><span className="eyebrow">INVEST IN YOUR NEXT CHAPTER</span><h1>Your cart</h1><p>A few good choices. A whole world of possibility.</p></header>{cartLoading ? <Loader /> : cart.length ? <div className="cart-layout"><section><div className="section-heading"><h2>Ready when you are</h2><span>{cart.length} courses</span></div><div className="collection-list">{cart.map(item => <CartItems key={item.id} item={item} />)}</div><Link className="text-link cart-browse" to="/home">Keep exploring <FiArrowRight /></Link></section><aside className="order-summary"><span className="eyebrow">YOUR NEXT STEP</span><h2>Order summary</h2><div className="summary-row"><span>{cart.length} courses</span><strong>{formatCurrency(totalPrice)}</strong></div><div className="summary-total"><span>Total</span><strong>{formatCurrency(totalPrice)}</strong></div><button className="btn btn-primary" onClick={() => handleFlutterPayment({ callback: response => { handlePaymentResponse(response); closePaymentModal(); }, onClose: () => {} })}>Continue to checkout <FiArrowRight /></button><p><FiLock />Payments processed by Flutterwave</p></aside></div> : <EmptyState icon={FiShoppingBag} title="Good things start with curiosity." description="Add a course you’d love to learn. We’ll keep your choices here until you’re ready." />}</div>;
}
export default Cart;
