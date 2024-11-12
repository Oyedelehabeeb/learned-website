import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUseExperienceDesignInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useUserExperienceDesignInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const {
    data: { data: userExperienceDesignInstructors, count } = {},
    isLoading,
  } = useQuery({
    queryKey: ["user-experience-design-instructors", pageInst],
    queryFn: () => getUseExperienceDesignInstructors({ pageInst }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["user-experience-design-instructors", pageInst + 1],
      queryFn: () =>
        getUseExperienceDesignInstructors({ pageInst: pageInst + 1 }),
    });

  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["user-experience-design-instructors", pageInst - 1],
      queryFn: () =>
        getUseExperienceDesignInstructors({ pageInst: pageInst - 1 }),
    });
  return { userExperienceDesignInstructors, count, isLoading };
}
