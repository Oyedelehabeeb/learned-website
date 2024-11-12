import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrandingCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useBranding() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: branding, count } = {}, isLoading } = useQuery({
    queryKey: ["branding", page],
    queryFn: () => getBrandingCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["branding", page + 1],
      queryFn: () => getBrandingCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["branding", page - 1],
      queryFn: () => getBrandingCourses({ page: page - 1 }),
    });

  return { branding, count, isLoading };
}
