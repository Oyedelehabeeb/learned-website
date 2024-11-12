import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Loader from "./../../Ui/Loader";

function SignUp() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { signup, isLoading } = useSignup();

  function onSubmit({ fullname, email, password }) {
    signup({ fullname, email, password }, { onSettled: () => reset() });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkGray px-4">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-xl rounded-lg md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-darkGray">
          Create Account
        </h2>
        <p className="text-center text-gray-500">
          Join us and start your learning journey.
        </p>

        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              disabled={isLoading}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("fullname", { required: "this field is required" })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                {errors.fullname.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              disabled={isLoading}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "this field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              disabled={isLoading}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "this field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              disabled={isLoading}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:blue-green-500"
              {...register("confirmPassword", {
                required: "this field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <button
              className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Sign Up"}
            </button>
            <button
              className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
              type="reset"
              onClick={reset}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
