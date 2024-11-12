import toast from "react-hot-toast";
import { sendResetPasswordLink as sendResetPasswordLinkApi } from "./apiAuthentication";
import { useMutation } from "@tanstack/react-query";
export function useForgetPassword() {
  const { mutate: SendResetPasswordLink, isLoading } = useMutation({
    mutationFn: (email) => sendResetPasswordLinkApi(email),
    onSuccess: () => {
      toast.success("Password reset link sent successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { SendResetPasswordLink, isLoading };
}
