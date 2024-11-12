import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMentalHealthInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useMentalHealthInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: mentalHealthInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["mental-health-instructors", pageInst],
      queryFn: () => getMentalHealthInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["mental-health-instructors", pageInst + 1],
      queryFn: () => getMentalHealthInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["mental-health-instructors", pageInst - 1],
      queryFn: () => getMentalHealthInstructors({ pageInst: pageInst - 1 }),
    });
  return { mentalHealthInstructors, count, isLoading };
}
