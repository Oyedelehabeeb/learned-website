/* eslint-disable react/prop-types */
import { formatCurrency } from "./../../Utils/helper";
function PaymentHistoryList({ payment }) {
  const { price, currency, status, created_at } = payment;
  return (
    <div>
      <div className="p-4 border rounded-md shadow-md bg-white">
        <p>
          <strong>Transaction Reference:</strong> {/* Transaction reference */}
        </p>
        <p>
          <strong>Amount: {formatCurrency(price)}</strong>{" "}
          {/* Payment amount */}
        </p>
        <p>
          <strong>Currency: {currency}</strong> {/* Currency */}
        </p>
        <p>
          <strong>Status: {status}</strong> {/* Payment status */}
        </p>
        <p>
          <strong>Date: {created_at}</strong> {/* Payment date */}
        </p>
      </div>
    </div>
  );
}

export default PaymentHistoryList;
