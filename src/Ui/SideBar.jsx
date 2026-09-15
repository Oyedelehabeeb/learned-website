/* eslint-disable react/prop-types */
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiGrid, FiBookOpen, FiCode, FiPenTool, FiTrendingUp, FiBriefcase, FiActivity, FiDollarSign, FiSettings, FiClock, FiLogOut } from "react-icons/fi";
import { useUser } from "../Features/Authentication/useUser";
import { useLogout } from "../Features/Authentication/useLogout";
const categories = [["Academics", "academics", FiBookOpen], ["Development", "development", FiCode], ["Design", "design", FiPenTool], ["Marketing", "marketing", FiTrendingUp], ["Finance", "finance", FiDollarSign], ["Business", "business", FiBriefcase], ["Health & fitness", "fitness", FiActivity]];
export default function SideBar({ open, onClose }) {
  const { user } = useUser();
  const { logout, isLoading } = useLogout();
  const { pathname } = useLocation();
  const name = user?.user_metadata?.fullname || user?.user_metadata?.full_name || "Learner";
  return <aside id="app-navigation" className={`app-sidebar ${open ? "is-open" : ""}`}><nav aria-label="Main navigation" onClick={onClose}><NavLink className="side-link" to="/home"><FiGrid />Discover</NavLink><NavLink className="side-link" to="/mylearning"><FiBookOpen />My learning</NavLink><span className="nav-label">EXPLORE TOPICS</span>{categories.map(([label, slug, Icon]) => <Link key={slug} className={`side-link ${pathname.startsWith(`/${slug}`) ? "active" : ""}`} to={`/${slug}/${slug}-hero`}><Icon />{label}</Link>)}<span className="nav-label">YOUR ACCOUNT</span><NavLink className="side-link" to="/payment-history"><FiClock />Purchase history</NavLink><NavLink className="side-link" to="/settings"><FiSettings />Settings</NavLink></nav><div className="sidebar-bottom"><Link to="/settings" className="profile-link"><span className="profile-initial">{name.charAt(0).toUpperCase()}</span><span><strong>{name}</strong><small>Personal account</small></span></Link><button className="side-link logout-link" disabled={isLoading} onClick={() => logout()}><FiLogOut />{isLoading ? "Signing out…" : "Sign out"}</button></div></aside>;
}
