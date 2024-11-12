import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getManagementInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useManagementInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: managementInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["management-instructors", pageInst],
      queryFn: () => getManagementInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["management-instructors", pageInst + 1],
      queryFn: () => getManagementInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["management-instructors", pageInst - 1],
      queryFn: () => getManagementInstructors({ pageInst: pageInst - 1 }),
    });
  return { managementInstructors, count, isLoading };
}
