import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getNutritionInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useNutritionInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: nutritionInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["nutrition-instructors", pageInst],
      queryFn: () => getNutritionInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["nutrition-instructors", pageInst + 1],
      queryFn: () => getNutritionInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["nutrition-instructors", pageInst - 1],
      queryFn: () => getNutritionInstructors({ pageInst: pageInst - 1 }),
    });
  return { nutritionInstructors, count, isLoading };
}
