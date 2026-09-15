/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiCheck } from "react-icons/fi";
import Brand from "./Brand";
export default function AuthLayout({ children }) {
  return <div className="auth-page"><section className="auth-story"><Brand light /><div><span className="eyebrow">A GOOD DAY TO START SOMETHING</span><h2>Your next chapter<br /><em>starts with you.</em></h2><p>Explore new ideas. Build practical skills. Make space for the person you want to become.</p><ul>{["Learn at your own pace", "Find a subject you love", "Keep your learning in one place"].map(text => <li key={text}><FiCheck />{text}</li>)}</ul></div><span className="auth-story-footer">Small steps. Lasting progress.<FiArrowUpRight /></span></section><section className="auth-main"><Link className="back-link" to="/"><FiArrowLeft />Back to home</Link><div className="auth-mobile-brand"><Brand /></div><div className="auth-form-wrap">{children}</div><footer className="auth-footer">Learned · Make curiosity a habit.</footer></section></div>;
}
