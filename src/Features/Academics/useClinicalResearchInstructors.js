import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getClinicalResearchInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useClinicalResearchInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: clinicalResearchInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["clinical-research-instructors", pageInst],
      queryFn: () => getClinicalResearchInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["clinical-research-instructors", pageInst + 1],
      queryFn: () => getClinicalResearchInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["clinical-research-instructors", pageInst - 1],
      queryFn: () => getClinicalResearchInstructors({ pageInst: pageInst - 1 }),
    });
  return { clinicalResearchInstructors, count, isLoading };
}
