import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
export default function PageNotFound() {
  return <div className="empty-state"><span className="eyebrow">404 · A SMALL DETOUR</span><h1>Let’s get you back on track.</h1><p>The page you’re looking for couldn’t be found.</p><Link className="btn btn-primary" to="/">Back to home <FiArrowRight /></Link></div>;
}
