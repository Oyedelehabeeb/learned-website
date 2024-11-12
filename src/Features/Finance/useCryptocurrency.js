import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getCryptocurrencyCourses } from "../../Services/apiCourses";

export function useCryptocurrency() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: cryptocurrency, count } = {}, isLoading } = useQuery({
    queryKey: ["cryptocurrency", page],
    queryFn: () => getCryptocurrencyCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cryptocurrency", page + 1],
      queryFn: () => getCryptocurrencyCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["cryptocurrency", page - 1],
      queryFn: () => getCryptocurrencyCourses({ page: page - 1 }),
    });

  return { cryptocurrency, count, isLoading };
}
