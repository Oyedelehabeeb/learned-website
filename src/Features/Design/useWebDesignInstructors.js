import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWebDesignInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useWebDesignInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: webDesignInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["web-design-instructors", pageInst],
      queryFn: () => getWebDesignInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["web-design-instructors", pageInst + 1],
      queryFn: () => getWebDesignInstructors({ pageInst: pageInst + 1 }),
    });

  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["web-design-instructors", pageInst - 1],
      queryFn: () => getWebDesignInstructors({ pageInst: pageInst - 1 }),
    });

  return { webDesignInstructors, isLoading, count };
}
