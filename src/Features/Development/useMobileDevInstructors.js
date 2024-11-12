import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMobileDevelopmentInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useMobileDevelopmentInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: mobileDevInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["mobile-development-instructors", pageInst],
      queryFn: () => getMobileDevelopmentInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["mobile-development-instructors", pageInst + 1],
      queryFn: () =>
        getMobileDevelopmentInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["mobile-development-instructors", pageInst - 1],
      queryFn: () =>
        getMobileDevelopmentInstructors({ pageInst: pageInst - 1 }),
    });

  return { mobileDevInstructors, isLoading, count };
}
