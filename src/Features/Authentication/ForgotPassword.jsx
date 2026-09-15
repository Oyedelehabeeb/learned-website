import { useState } from "react";
import { Link } from "react-router-dom";
import { useForgetPassword } from "../../Services/useForgetPassword";
import AuthLayout from "../../Ui/AuthLayout";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { SendResetPasswordLink, isLoading } = useForgetPassword();
  return <AuthLayout><span className="eyebrow">LET’S GET YOU BACK IN</span><h1>Forgot your password?</h1><p className="auth-intro">Enter your email address and we’ll send you a link to reset your password.</p><form className="auth-form" onSubmit={e => { e.preventDefault(); SendResetPasswordLink(email); }}><div className="form-field"><label htmlFor="reset-email">Email address</label><input id="reset-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required disabled={isLoading} /></div><button className="btn btn-primary" disabled={isLoading}>{isLoading ? "Sending link…" : "Send reset link"}</button></form><p className="auth-switch"><Link to="/login">Back to sign in</Link></p></AuthLayout>;
}
