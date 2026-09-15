/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
export default function EmptyState({ icon: Icon, title, description, to = "/home", action = "Explore subjects" }) {
  return <div className="empty-state">{Icon && <span className="category-icon"><Icon /></span>}<h2>{title}</h2><p>{description}</p><Link className="btn btn-primary" to={to}>{action}<FiArrowRight /></Link></div>;
}
