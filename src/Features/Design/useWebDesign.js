import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWebDesignCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useWebDesign() {
  const queryClient = useQueryClient();
  //PAGINATION
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: webDesign, count } = {}, isLoading } = useQuery({
    queryKey: ["web-design", page],
    queryFn: () => getWebDesignCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["web-design", page + 1],
      queryFn: () => getWebDesignCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["web-design", page - 1],
      queryFn: () => getWebDesignCourses({ page: page - 1 }),
    });

  // const webDesign = data?.data ?? [];
  // const count = data?.count ?? 0;

  return { webDesign, isLoading, count };
}
