import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getClinicalResearchCourses } from "../../Services/apiCourses";

export function useClinicalResearch() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: clinicalResearch, count } = {}, isLoading } = useQuery({
    queryKey: ["clinical-research", page],
    queryFn: () => getClinicalResearchCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["clinical-research", page + 1],
      queryFn: () => getClinicalResearchCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["clinical-research", page - 1],
      queryFn: () => getClinicalResearchCourses({ page: page - 1 }),
    });

  return { clinicalResearch, count, isLoading };
}
