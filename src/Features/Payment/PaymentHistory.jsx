import PaymentHistoryList from "./PaymentHistoryList";
import { usePaymentHistory } from "./usePaymentHistory";
import Loader from "./../../Ui/Loader";
import { useUser } from "./../Authentication/useUser";
import { MdManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";
function PaymentHistory() {
  const { paymentHistory, isLoading } = usePaymentHistory();
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const email = user?.email;

  if (isLoading) return <Loader />;
  if (paymentHistory?.length === 0)
    return (
      <div className="flex flex-col items-center p-24 h-screen">
        <h2 className=" text-xl md:text-2xl font-semibold">
          Your payment history is empty
        </h2>
        <Link to="/home" className="mt-4 text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    );

  return (
    <div className=" max-w-4xl mx-auto">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-center flex items-center justify-center space-x-4 mb-8">
        <MdManageHistory className="text-4xl" /> <span>Payment History</span>
      </div>

      <div className="mb-8 border-b pb-4">
        <p>
          <strong>Name: {fullname}</strong>
        </p>
        <p>
          <strong>Email: {email}</strong>
        </p>
      </div>

      <div className="space-y-4">
        {paymentHistory?.map((payment, index) => (
          <PaymentHistoryList payment={payment} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PaymentHistory;
