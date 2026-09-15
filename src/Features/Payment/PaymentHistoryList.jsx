/* eslint-disable react/prop-types */
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { formatCurrency } from "../../Utils/helper";
import { useDeletePaymentHistory } from "./useDeletePaymentHistory";
export default function PaymentHistoryList({ payment }) {
  const { deletePaymentHistory, isDeleting } = useDeletePaymentHistory();
  const date = new Date(payment.created_at);
  return <article className="payment-card"><span className="category-icon"><FiCreditCard /></span><div className="payment-info"><h3>{payment.tx_ref || "Course purchase"}</h3><p>{Number.isNaN(date.getTime()) ? payment.created_at : date.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}</p><span className={`payment-status ${payment.status === "successful" ? "success" : ""}`}>{payment.status || "Pending"}</span></div><div className="payment-actions"><strong>{formatCurrency(payment.price)}</strong><small>{payment.currency}</small><button className="remove-button" disabled={isDeleting} onClick={() => deletePaymentHistory(payment.id)} aria-label="Delete this payment record"><FiTrash2 />{isDeleting ? "Deleting…" : "Delete record"}</button></div></article>;
}
