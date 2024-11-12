// src/pages/ForgotPassword.jsx
import { useState } from "react";
import { useForgetPassword } from "../../Services/useForgetPassword";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { SendResetPasswordLink, isLoading } = useForgetPassword();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    SendResetPasswordLink(email);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkGray">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
