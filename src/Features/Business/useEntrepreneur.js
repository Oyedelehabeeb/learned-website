import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEntrepreneurCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useEntrepreneur() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: entrepreneur, count } = {}, isLoading } = useQuery({
    queryKey: ["entrepreneur", page],
    queryFn: () => getEntrepreneurCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["entrepreneur", page + 1],
      queryFn: () => getEntrepreneurCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["entrepreneur", page - 1],
      queryFn: () => getEntrepreneurCourses({ page: page - 1 }),
    });

  return { entrepreneur, count, isLoading };
}
