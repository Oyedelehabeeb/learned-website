import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCryptocurrencyInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useCryptocurrencyInstructors() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: cryptoInstructors, count } = {}, isLoading } = useQuery(
    {
      queryKey: ["crypto-instructors", pageInst],
      queryFn: () => getCryptocurrencyInstructors({ pageInst }),
    }
  );

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["crypto-instructors", pageInst + 1],
      queryFn: () => getCryptocurrencyInstructors({ pageInst: pageInst + 1 }),
    });

  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["crypto-instructors", pageInst - 1],
      queryFn: () => getCryptocurrencyInstructors({ pageInst: pageInst - 1 }),
    });

  return { cryptoInstructors, count, isLoading };
}
