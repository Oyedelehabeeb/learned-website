import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePaymentHistory as deletePaymentHistoryApi } from "../../Services/apiPayment";
import toast from "react-hot-toast";

export function useDeletePaymentHistory() {
  const queryClient = useQueryClient();
  const { mutate: deletePaymentHistory, isLoading: isDeleting } = useMutation({
    mutationFn: deletePaymentHistoryApi,
    onSuccess: () => {
      toast.success("Payment history deleted.");
      queryClient.invalidateQueries({ queryKey: ["payment-history"] });
    },
    onError: (error) => {
      toast.error("Failed to delete payment history.");
      console.error("Error deleting payment history:", error);
    },
  });

  return { deletePaymentHistory, isDeleting };
}
