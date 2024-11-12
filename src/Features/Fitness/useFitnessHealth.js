import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFitnessCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useFitnessHealth() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: fitnessHealth, count } = {}, isLoading } = useQuery({
    queryKey: ["fitness-Health", page],
    queryFn: () => getFitnessCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["fitness-Health", page + 1],
      queryFn: () => getFitnessCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["fitness-Health", page - 1],
      queryFn: () => getFitnessCourses({ page: page - 1 }),
    });

  return { fitnessHealth, count, isLoading };
}
