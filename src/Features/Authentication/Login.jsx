/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useState } from "react";

import Loader from "./../../Ui/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkGray px-4">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-xl rounded-lg md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-darkGray">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">
          Please sign in to access your account.
        </p>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="text-customGray">
            Forgot password?{" "}
            <Link to="/forgot-password" className="text-blue-600">
              Reset
            </Link>
          </p>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            {isLoading ? <Loader /> : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
