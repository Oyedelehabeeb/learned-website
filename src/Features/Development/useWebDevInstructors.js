import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWebDevelopmentInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useWebDevelopmentInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: webDevInstructors, count } = {}, isLoading } = useQuery(
    {
      queryKey: ["web-development-instructors", pageInst],
      queryFn: () => getWebDevelopmentInstructors({ pageInst }),
    }
  );

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["web-development-instructors", pageInst + 1],
      queryFn: () => getWebDevelopmentInstructors({ pageInst: pageInst + 1 }),
    });

  if (pageInst < 1)
    queryClient.prefetchQuery({
      queryKey: ["web-development-instructors", pageInst - 1],
      queryFn: () => getWebDevelopmentInstructors({ pageInst: pageInst - 1 }),
    });
  return { webDevInstructors, count, isLoading };
}
