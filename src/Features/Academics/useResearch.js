import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";
import { getResearchPapersCourses } from "../../Services/apiCourses";

export function useResearch() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: research, count } = {}, isLoading } = useQuery({
    queryKey: ["research", page],
    queryFn: () => getResearchPapersCourses({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["research", page + 1],
      queryFn: () => getResearchPapersCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["research", page - 1],
      queryFn: () => getResearchPapersCourses({ page: page - 1 }),
    });

  return { research, count, isLoading };
}
