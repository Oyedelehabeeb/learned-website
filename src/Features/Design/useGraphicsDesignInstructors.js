import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGraphicDesignInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useGraphicsDesignInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: graphicsDesignInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["graphics-experience-design-instructors", pageInst],
      queryFn: () => getGraphicDesignInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["graphics-design-instructors", pageInst + 1],
      queryFn: () => getGraphicDesignInstructors({ pageInst: pageInst + 1 }),
    });

  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["graphics-design-instructors", pageInst - 1],
      queryFn: () => getGraphicDesignInstructors({ pageInst: pageInst - 1 }),
    });
  return { graphicsDesignInstructors, count, isLoading };
}
