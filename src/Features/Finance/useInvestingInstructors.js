import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getInvestingInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useInvestingInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: investingInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["investing-instructors", pageInst],
      queryFn: () => getInvestingInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["investing-instructors", pageInst + 1],
      queryFn: () => getInvestingInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["investing-instructors", pageInst - 1],
      queryFn: () => getInvestingInstructors({ pageInst: pageInst - 1 }),
    });
  return { investingInstructors, count, isLoading };
}
