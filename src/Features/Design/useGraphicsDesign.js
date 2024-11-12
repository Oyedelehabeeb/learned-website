import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGraphicsDesignCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useGraphicsDesign() {
  const queryClient = useQueryClient();
  //PAGINATION
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: graphicsDesign, count } = {}, isLoading } = useQuery({
    queryKey: ["web-design", page],
    queryFn: () => getGraphicsDesignCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["web-design", page + 1],
      queryFn: () => getGraphicsDesignCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["web-design", page - 1],
      queryFn: () => getGraphicsDesignCourses({ page: page - 1 }),
    });

  return { graphicsDesign, count, isLoading };
}
