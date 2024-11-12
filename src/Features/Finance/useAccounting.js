import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getAccountingCourses } from "../../Services/apiCourses";

export function useAccounting() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: accounting, count } = {}, isLoading } = useQuery({
    queryKey: ["accounting", page],
    queryFn: () => getAccountingCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["accounting", page + 1],
      queryFn: () => getAccountingCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["accounting", page - 1],
      queryFn: () => getAccountingCourses({ page: page - 1 }),
    });

  return { accounting, count, isLoading };
}
