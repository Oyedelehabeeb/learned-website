import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFitnessHealthInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useFitnessHealthInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: fitnessHealthInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["fitness-health-instructors", pageInst],
      queryFn: () => getFitnessHealthInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["fitness-health-instructors", pageInst + 1],
      queryFn: () => getFitnessHealthInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["fitness-health-instructors", pageInst - 1],
      queryFn: () => getFitnessHealthInstructors({ pageInst: pageInst - 1 }),
    });
  return { fitnessHealthInstructors, count, isLoading };
}
