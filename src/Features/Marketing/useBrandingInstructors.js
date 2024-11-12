import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrandingInstructors } from "../../Services/apiInstructors";
import { PAGE_SIZE } from "../../Utils/constants";
import { useSearchParams } from "react-router-dom";

export function useBrandingInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: brandingInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["branding-instructors", pageInst],
      queryFn: () => getBrandingInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["branding-instructors", pageInst + 1],
      queryFn: () => getBrandingInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["branding-instructors", pageInst - 1],
      queryFn: () => getBrandingInstructors({ pageInst: pageInst - 1 }),
    });

  return { brandingInstructors, count, isLoading };
}
