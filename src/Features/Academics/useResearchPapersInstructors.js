import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getResearchPaperInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useResearchPapersInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: researchInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["research-instructors", pageInst],
      queryFn: () => getResearchPaperInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["research-instructors", pageInst + 1],
      queryFn: () => getResearchPaperInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["research-instructors", pageInst - 1],
      queryFn: () => getResearchPaperInstructors({ pageInst: pageInst - 1 }),
    });
  return { researchInstructors, count, isLoading };
}
