import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataScienceCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useDataScience() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: dataScience, count } = {}, isLoading } = useQuery({
    queryKey: ["data-science", page],
    queryFn: () => getDataScienceCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["data-science", page + 1],
      queryFn: () => getDataScienceCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["data-science", page - 1],
      queryFn: () => getDataScienceCourses({ page: page - 1 }),
    });

  return { dataScience, count, isLoading };
}
