import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getNutritionCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useNutrition() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: nutrition, count } = {}, isLoading } = useQuery({
    queryKey: ["nutrition", page],
    queryFn: () => getNutritionCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["nutrition", page + 1],
      queryFn: () => getNutritionCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["nutrition", page - 1],
      queryFn: () => getNutritionCourses({ page: page - 1 }),
    });

  return { nutrition, count, isLoading };
}
