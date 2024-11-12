import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getAnatomyCourses } from "../../Services/apiCourses";

export function useAnatomy() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: anatomy, count } = {}, isLoading } = useQuery({
    queryKey: ["anatomy", page],
    queryFn: () => getAnatomyCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["anatomy", page + 1],
      queryFn: () => getAnatomyCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["anatomy", page - 1],
      queryFn: () => getAnatomyCourses({ page: page - 1 }),
    });

  return { anatomy, count, isLoading };
}
