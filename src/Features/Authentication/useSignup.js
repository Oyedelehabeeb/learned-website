import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../Services/apiAuthentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Signup successful");
      console.log(user);
      navigate("/login");
    },
  });
  return { signup, isLoading };
}
