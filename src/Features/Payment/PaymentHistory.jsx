import { FiClock } from "react-icons/fi";
import { usePaymentHistory } from "./usePaymentHistory";
import PaymentHistoryList from "./PaymentHistoryList";
import Loader from "../../Ui/Loader";
import EmptyState from "../../Ui/EmptyState";
export default function PaymentHistory() {
  const { paymentHistory = [], isLoading } = usePaymentHistory();
  return <div><header className="page-heading"><span className="eyebrow">YOUR INVESTMENT IN YOU</span><h1>Purchase history</h1><p>Your transactions and payment details, together in one place.</p></header>{isLoading ? <Loader /> : paymentHistory.length ? <div className="payment-list">{paymentHistory.map(payment => <PaymentHistoryList payment={payment} key={payment.id} />)}</div> : <EmptyState icon={FiClock} title="Your story is just beginning." description="Your payment history will appear here after your first course purchase." />}</div>;
}
