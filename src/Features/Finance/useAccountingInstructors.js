import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAccountingInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useAccountingInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: accountingInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["accounting-instructors", pageInst],
      queryFn: () => getAccountingInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["accounting-instructors", pageInst + 1],
      queryFn: () => getAccountingInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["accounting-instructors", pageInst - 1],
      queryFn: () => getAccountingInstructors({ pageInst: pageInst - 1 }),
    });
  return { accountingInstructors, count, isLoading };
}
