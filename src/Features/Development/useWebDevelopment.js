import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWebDevelopmentCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useWebDevelopment() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: webDevelopment, count } = {}, isLoading } = useQuery({
    queryKey: ["web-development", page],
    queryFn: () => getWebDevelopmentCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["web-development", page + 1],
      queryFn: () => getWebDevelopmentCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["web-development", page - 1],
      queryFn: () => getWebDevelopmentCourses({ page: page - 1 }),
    });

  return { webDevelopment, count, isLoading };
}
