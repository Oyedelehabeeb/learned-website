import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDigitalMarketingCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useDigitalMarketing() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: digitalMarketing, count } = {}, isLoading } = useQuery({
    queryKey: ["digital-marketing", page],
    queryFn: () => getDigitalMarketingCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["digital-marketing", page + 1],
      queryFn: () => getDigitalMarketingCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["digital-marketing", page - 1],
      queryFn: () => getDigitalMarketingCourses({ page: page - 1 }),
    });

  return { digitalMarketing, count, isLoading };
}
