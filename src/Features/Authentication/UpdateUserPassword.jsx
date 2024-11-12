import { useForm } from "react-hook-form";
import { useUpdateuser } from "./useUpdateUser";
import { useNavigate } from "react-router-dom";

function UpdateUserPassword() {
  const { updateUser, isUpdating } = useUpdateuser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const newPassword = watch("newPassword");

  function onSubmit() {
    updateUser(
      { password: newPassword },
      { onSettled: () => reset() },
      navigate("/login")
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkGray">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        <div className="mb-4">
          <input
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            className="w-full p-3 border rounded-md"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            className="w-full p-3 border rounded-md"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
        >
          {isUpdating ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default UpdateUserPassword;
