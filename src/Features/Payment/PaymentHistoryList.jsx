/* eslint-disable react/prop-types */
import { formatCurrency } from "./../../Utils/helper";
import { useDeletePaymentHistory } from "./useDeletePaymentHistory";
function PaymentHistoryList({ payment }) {
  const { id, price, currency, status, created_at } = payment;
  const { deletePaymentHistory, isDeleting } = useDeletePaymentHistory();

  function handleDelete() {
    deletePaymentHistory(id);
  }

  return (
    <div>
      <div className="p-4 border rounded-md shadow-md bg-white">
        <p>
          <strong>Transaction Reference:</strong>
        </p>
        <p>Amount: {formatCurrency(price)}</p>
        <p>Currency: {currency}</p>
        <p>Status: {status}</p>
        <p>Date: {created_at}</p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div></div>
          <button
            className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition ${
              isDeleting ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistoryList;
