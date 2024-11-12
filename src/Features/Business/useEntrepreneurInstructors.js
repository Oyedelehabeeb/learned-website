import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEntrepreneurInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useEntrepreneurInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: entrepreneurInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["entrepreneur-instructors", pageInst],
      queryFn: () => getEntrepreneurInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["entrepreneur-instructors", pageInst + 1],
      queryFn: () => getEntrepreneurInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["entrepreneur-instructors", pageInst - 1],
      queryFn: () => getEntrepreneurInstructors({ pageInst: pageInst - 1 }),
    });
  return { entrepreneurInstructors,count,isLoading };
}
