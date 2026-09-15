/* eslint-disable react/prop-types */
import { FiAlertCircle } from "react-icons/fi";
export default function QueryError({ onRetry }) {
  return <div className="empty-state" role="alert"><FiAlertCircle /><h2>We couldn’t load this content.</h2><p>Give it another try to continue exploring.</p><button className="btn btn-outline" onClick={onRetry}>Try again</button></div>;
}
