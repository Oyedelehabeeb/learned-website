/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "./useSignup";
import {
  FaGraduationCap,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheck,
} from "react-icons/fa";
import Loader from "./../../Ui/Loader";

function SignUp() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullname || !email || !password || !confirmPassword) return;
    if (password !== confirmPassword) return;

    signup(
      { fullname, email, password },
      {
        onSettled: () => {
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        },
      }
    );
  }

  const passwordsMatch = password === confirmPassword && password.length > 0;
  const formValid =
    fullname && email && password && confirmPassword && passwordsMatch;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="min-h-screen bg-customGray flex items-center justify-center px-4 py-8">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-2xl mb-6 shadow-lg">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-beige mb-2">Join Learned</h1>
            <p className="text-gray-300">
              Create your account and start your learning journey today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-semibold text-beige mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-xl pl-12 pr-4 py-4 text-beige placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {fullname && fullname.length < 2 && (
                <p className="text-red-400 text-xs mt-2">
                  Name must be at least 2 characters
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-beige mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400 text-sm" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="username"
                  className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-xl pl-12 pr-4 py-4 text-beige placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {email && !isValidEmail && (
                <p className="text-red-400 text-xs mt-2">
                  Please enter a valid email address
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-beige mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400 text-sm" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-xl pl-12 pr-12 py-4 text-beige placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 text-sm hover:text-yellow-400 transition-colors" />
                  ) : (
                    <FaEye className="text-gray-400 text-sm hover:text-yellow-400 transition-colors" />
                  )}
                </button>
              </div>
              {password && password.length < 6 && (
                <p className="text-red-400 text-xs mt-2">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-beige mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400 text-sm" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-xl pl-12 pr-12 py-4 text-beige placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {confirmPassword && (
                    <div className="mr-2">
                      {passwordsMatch ? (
                        <FaCheck className="text-green-400 text-xs" />
                      ) : (
                        <span className="text-red-400 text-xs">✕</span>
                      )}
                    </div>
                  )}
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-400 text-sm hover:text-yellow-400 transition-colors" />
                  ) : (
                    <FaEye className="text-gray-400 text-sm hover:text-yellow-400 transition-colors" />
                  )}
                </button>
              </div>
              {confirmPassword && !passwordsMatch && (
                <p className="text-red-400 text-xs mt-2">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isLoading || !formValid || !isValidEmail || password.length < 6
              }
              className="w-full bg-yellow-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader /> : "Create Account"}
            </button>
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-4">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              Privacy Policy
            </a>
          </p>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white border-opacity-20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-400">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-beige hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Sign in instead
              <span className="text-yellow-400">→</span>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-beige transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
