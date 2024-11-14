import { useQuery } from "@tanstack/react-query";
import { getPayment } from "../../Services/apiPayment";

export function usePaymentHistory() {
  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ["payment-history"],
    queryFn: getPayment,
  });
  return { paymentHistory, isLoading };
}
