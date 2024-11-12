import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMentalHealthCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useMentalHealth() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: mentalHealth, count } = {}, isLoading } = useQuery({
    queryKey: ["mentalHealth", page],
    queryFn: () => getMentalHealthCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["mentalHealth", page + 1],
      queryFn: () => getMentalHealthCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["mentalHealth", page - 1],
      queryFn: () => getMentalHealthCourses({ page: page - 1 }),
    });

  return { mentalHealth, count, isLoading };
}
