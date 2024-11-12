import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSocialMediaMarketingInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useSocialMediaMarketingInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const {
    data: { data: socialMediaMarketingInstructors, count } = {},
    isLoading,
  } = useQuery({
    queryKey: ["social-media-marketing-instructors", pageInst],
    queryFn: () => getSocialMediaMarketingInstructors({ pageInst }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["social-media-marketing-instructors", pageInst + 1],
      queryFn: () =>
        getSocialMediaMarketingInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["social-media-marketing-instructors", pageInst - 1],
      queryFn: () =>
        getSocialMediaMarketingInstructors({ pageInst: pageInst - 1 }),
    });

  return { socialMediaMarketingInstructors, count, isLoading };
}
