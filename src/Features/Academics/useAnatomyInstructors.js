import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAnatomyInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useAnatomyInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: anatomyInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["anatomy-instructors", pageInst],
      queryFn: () => getAnatomyInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["anatomy-instructors", pageInst + 1],
      queryFn: () => getAnatomyInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["anatomy-instructors", pageInst - 1],
      queryFn: () => getAnatomyInstructors({ pageInst: pageInst - 1 }),
    });
  return { anatomyInstructors, count, isLoading };
}
