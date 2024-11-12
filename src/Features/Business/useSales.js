import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSalesCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useSales() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: sales, count } = {}, isLoading } = useQuery({
    queryKey: ["sales", page],
    queryFn: () => getSalesCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["sales", page + 1],
      queryFn: () => getSalesCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["sales", page - 1],
      queryFn: () => getSalesCourses({ page: page - 1 }),
    });

  return { sales, count, isLoading };
}
