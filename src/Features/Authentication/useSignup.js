import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../Services/apiAuthentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Signup successful");
      navigate("/login");
    },
    onError: (error) => toast.error(error.message || "Could not create your account. Please try again."),
  });
  return { signup, isLoading };
}
