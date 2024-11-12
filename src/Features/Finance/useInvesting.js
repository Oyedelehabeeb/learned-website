import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getInvestingCourses } from "../../Services/apiCourses";

export function useInvesting() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: investing, count } = {}, isLoading } = useQuery({
    queryKey: ["investing", page],
    queryFn: () => getInvestingCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["investing", page + 1],
      queryFn: () => getInvestingCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["investing", page - 1],
      queryFn: () => getInvestingCourses({ page: page - 1 }),
    });

  return { investing, count, isLoading };
}
