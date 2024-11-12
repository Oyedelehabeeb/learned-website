import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSocialMediaMarketingCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useSocialMediaMarketing() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: socialMediaMarketing, count } = {}, isLoading } =
    useQuery({
      queryKey: ["social-media-marketing", page],
      queryFn: () => getSocialMediaMarketingCourses({ page }),
    });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["social-media-marketing", page + 1],
      queryFn: () => getSocialMediaMarketingCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["social-media-marketing", page - 1],
      queryFn: () => getSocialMediaMarketingCourses({ page: page - 1 }),
    });

  return { socialMediaMarketing, count, isLoading };
}
