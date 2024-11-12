import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMobileDevelopmentCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useMobileDevelopment() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: mobileDevelopment, count } = {}, isLoading } = useQuery(
    {
      queryKey: ["mobile-development", page],
      queryFn: () => getMobileDevelopmentCourses({ page }),
    }
  );

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["mobile-development", page + 1],
      queryFn: () => getMobileDevelopmentCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["mobile-development", page - 1],
      queryFn: () => getMobileDevelopmentCourses({ page: page - 1 }),
    });

  return { mobileDevelopment, count, isLoading };
}
