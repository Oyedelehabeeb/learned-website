import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSalesInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useSalesInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: salesInstructors, count } = {}, isLoading } = useQuery({
    queryKey: ["sales-instructors", pageInst],
    queryFn: () => getSalesInstructors({ pageInst }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["sales-instructors", pageInst + 1],
      queryFn: () => getSalesInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["sales-instructors", pageInst - 1],
      queryFn: () => getSalesInstructors({ pageInst: pageInst - 1 }),
    });
  return { salesInstructors, count, isLoading };
}
