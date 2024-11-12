import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../Services/apiAuthentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success("Logged in successfully");
      queryClient.setQueryData(["user", user.user]);
      navigate("/home", { replace: true });
    },
    onError: (error) => {
      toast.error("Invalid credentials, please try again");
      console.log("invalid credentials", error);
    },
  });
  return { login, isLoading };
}
