/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
export default function Brand({ to = "/", light = false }) {
  return <Link to={to} className={`brand ${light ? "brand-light" : ""}`} aria-label="Learned home"><span className="brand-mark"><FiBookOpen /></span>learned<span className="brand-dot">.</span></Link>;
}
