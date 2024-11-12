import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getManagementCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useManagement() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: management, count } = {}, isLoading } = useQuery({
    queryKey: ["management", page],
    queryFn: () => getManagementCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["management", page + 1],
      queryFn: () => getManagementCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["management", page - 1],
      queryFn: () => getManagementCourses({ page: page - 1 }),
    });

  return { management, count, isLoading };
}
