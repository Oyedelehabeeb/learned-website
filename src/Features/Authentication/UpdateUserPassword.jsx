import { useForm } from "react-hook-form";
import { useUpdateuser } from "./useUpdateUser";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Ui/AuthLayout";
export default function UpdateUserPassword() {
  const { updateUser, isUpdating } = useUpdateuser();
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const navigate = useNavigate();
  function submit({ newPassword }) { updateUser({ password: newPassword }, { onSuccess: () => { reset(); navigate("/login"); } }); }
  return <AuthLayout><span className="eyebrow">A FRESH START</span><h1>Set a new password.</h1><p className="auth-intro">Choose a password with at least six characters.</p><form className="auth-form" onSubmit={handleSubmit(submit)}><div className="form-field"><label htmlFor="new-password">New password</label><input id="new-password" type="password" autoComplete="new-password" disabled={isUpdating} {...register("newPassword", { required: "Enter a new password.", minLength: { value: 6, message: "Use at least 6 characters." } })} />{errors.newPassword && <p className="field-error" role="alert">{errors.newPassword.message}</p>}</div><div className="form-field"><label htmlFor="confirm-password">Confirm password</label><input id="confirm-password" type="password" autoComplete="new-password" disabled={isUpdating} {...register("confirmPassword", { required: "Confirm your new password.", validate: value => value === watch("newPassword") || "Your passwords do not match." })} />{errors.confirmPassword && <p className="field-error" role="alert">{errors.confirmPassword.message}</p>}</div><button className="btn btn-primary" disabled={isUpdating}>{isUpdating ? "Updating…" : "Update password"}</button></form></AuthLayout>;
}
