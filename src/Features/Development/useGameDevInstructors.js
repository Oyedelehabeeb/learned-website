import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGameDevelopmentInstructors } from "../../Services/apiInstructors";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useGameDevelopmentInstructors() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const pageInst = !searchParams.get("pageInst")
    ? 1
    : Number(searchParams.get("pageInst"));

  const { data: { data: gameDevInstructors, count } = {}, isLoading } =
    useQuery({
      queryKey: ["game-development-instructors", pageInst],
      queryFn: () => getGameDevelopmentInstructors({ pageInst }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (pageInst < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["game-development-instructors", pageInst + 1],
      queryFn: () => getGameDevelopmentInstructors({ pageInst: pageInst + 1 }),
    });
  if (pageInst > 1)
    queryClient.prefetchQuery({
      queryKey: ["data-science-instructors", pageInst - 1],
      queryFn: () => getGameDevelopmentInstructors({ pageInst: pageInst - 1 }),
    });

  return { gameDevInstructors, isLoading, count };
}
