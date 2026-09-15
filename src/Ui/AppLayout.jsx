import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Loader from "./Loader";
export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header onMenu={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} /><SideBar open={menuOpen} onClose={() => setMenuOpen(false)} />{menuOpen && <button className="nav-scrim" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}<main id="main-content" className="app-content"><Suspense fallback={<Loader />}><Outlet /></Suspense></main></div>;
}
