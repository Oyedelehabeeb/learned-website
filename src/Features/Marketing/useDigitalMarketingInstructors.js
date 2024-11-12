import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDigitalMarketingInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useDigitalMarketingInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: digitalMarketingInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["digital-marketing-instructors", pageInst],
      queryFn: () => getDigitalMarketingInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["digital-marketing-instructors", pageInst + 1],
      queryFn: () => getDigitalMarketingInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["digital-marketing-instructors", pageInst - 1],
      queryFn: () => getDigitalMarketingInstructors({ pageInst: pageInst - 1 }),
    });
  return { digitalMarketingInstructors, count, isLoading };
}
