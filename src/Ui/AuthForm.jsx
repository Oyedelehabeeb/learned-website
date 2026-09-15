/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { useLogin } from "../Features/Authentication/useLogin";
import { useSignup } from "../Features/Authentication/useSignup";
import AuthLayout from "./AuthLayout";
export default function AuthForm({ signup = false }) {
  const [values, setValues] = useState({ fullname: "", email: "", password: "", confirm: "" });
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const busy = signup ? signupMutation.isLoading : loginMutation.isLoading;
  const mismatch = signup && values.confirm && values.confirm !== values.password;
  function submit(event) {
    event.preventDefault(); setSubmitted(true);
    if (signup && (values.fullname.trim().length < 2 || values.password.length < 6 || values.confirm !== values.password)) return;
    if (signup) signupMutation.signup({ fullname: values.fullname.trim(), email: values.email.trim(), password: values.password });
    else loginMutation.login({ email: values.email.trim(), password: values.password });
  }
  function field(name, label, type, placeholder, autoComplete) {
    const password = name === "password" || name === "confirm";
    const invalid = name === "confirm" && mismatch;
    return <div className="form-field"><label htmlFor={name}>{label}</label><div className="field-input"><input id={name} name={name} type={password && visible ? "text" : type} autoComplete={autoComplete} placeholder={placeholder} value={values[name]} onChange={e => setValues({ ...values, [name]: e.target.value })} disabled={busy} required minLength={name === "fullname" ? 2 : password && signup ? 6 : undefined} aria-invalid={!!invalid} aria-describedby={invalid ? "password-error" : undefined} />{name === "password" && <button type="button" className="password-toggle" aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible(!visible)}>{visible ? <FiEyeOff /> : <FiEye />}</button>}</div></div>;
  }
  return <AuthLayout><span className="eyebrow">{signup ? "BEGIN YOUR JOURNEY" : "PICK UP WHERE YOU LEFT OFF"}</span><h1>{signup ? "Make yourself at home." : "Welcome back."}</h1><p className="auth-intro">{signup ? "Create an account. Find your next possibility." : "Sign in to your account and keep moving forward."}</p><form onSubmit={submit} className="auth-form">
    {signup && field("fullname", "Full name", "text", "Your full name", "name")}
    {field("email", "Email address", "email", "you@example.com", "username")}
    {field("password", "Password", "password", signup ? "At least 6 characters" : "Enter your password", signup ? "new-password" : "current-password")}
    {signup && field("confirm", "Confirm password", "password", "Re-enter your password", "new-password")}
    {mismatch && <p className="field-error" id="password-error" role={submitted ? "alert" : undefined}>Your passwords do not match.</p>}
    {!signup && <Link className="forgot-link" to="/forgot-password">Forgot password?</Link>}
    <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? <><span className="loading-spinner" />{signup ? "Creating account…" : "Signing in…"}</> : <>{signup ? "Create account" : "Sign in"}<FiArrowRight /></>}</button>
  </form><p className="auth-switch">{signup ? "Already have an account?" : "New to Learned?"} <Link to={signup ? "/login" : "/signup"}>{signup ? "Sign in" : "Create an account"}</Link></p></AuthLayout>;
}
